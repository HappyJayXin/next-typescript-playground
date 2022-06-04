import { useEffect, useState, useCallback } from "react";

interface HotKeyConfig {
	isCtrl: boolean;
	keyCode: string;
}

const getHotkeyConfig = (key: string): HotKeyConfig => {
	const keys = key.split("+");
	const config = {
		isCtrl: false,
	} as HotKeyConfig;
	for (const key of keys) {
		switch (key) {
			case "ctrl":
				config.isCtrl = true;
				break;
			case "esc":
				config.keyCode = "Escape";
				break;
			default:
				config.keyCode = key;
		}
	}

	return config;
}

const useHotkeys = () => {
	const [hotkeys, setHotkeys] = useState<Record<string, () => void>>({});

	const pushHotkey = useCallback(
		(combo: string, action: () => void) => {
			if (hotkeys[combo] != null) {
				setHotkeys((val) => {
					delete val[combo];
					return { ...val };
				});
			}

			setHotkeys((val) => ({ ...val, [combo]: action }));
		},
		[hotkeys],
	)

	useEffect(() => {
		const listener = (e: globalThis.KeyboardEvent) => {
			for (const combo of Object.keys(hotkeys)) {
				const config = getHotkeyConfig(combo);
				const action = hotkeys[combo];

				if (e.key === config.keyCode && e.ctrlKey === config.isCtrl) {
					e.preventDefault();
					action();
				}
			}
			e.stopPropagation();
		}

		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, [hotkeys]);

	return {
		pushHotkey,
	};
}

export default useHotkeys;
