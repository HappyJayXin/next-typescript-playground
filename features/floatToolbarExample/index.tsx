import FloatToolbar, { useFloatToolbar } from '../../components/floatToolbar';

const FloatToolbarExample = () => {
  const { moveToolbar, isShow, rects } = useFloatToolbar();

  return (
    <>
      <div
        contentEditable="true"
        spellCheck="false"
        className="bg-slate-100 p-8 max-w-lg my-8 mx-auto"
        onSelect={moveToolbar}
        onMouseUp={moveToolbar}
      >
        <div>
          選取下面文字並標記<span style={{ fontWeight: 'bold' }}>粗體</span>、
          <span style={{ textDecorationLine: 'underline' }}>底線</span>或
          <span style={{ fontStyle: 'italic' }}>斜體</span>。
        </div>
        <hr className="my-3" />
        <p className="mb-6">
          <span>
            階層樣式表 (Cascading Stylesheets；CSS)
            可用以塑造網站的特殊風格。例如這段文字要用一般的黑色，或是改用紅色標明重點？某段重要內容應該置於畫面的何處？想用什麼背景圖片及顏色裝飾你的網站？〈CSS
            基本概念〉帶你入門。
          </span>
        </p>

        <p>
          <span>
            跟 HTML 一樣，CSS 既非標準程式語言，也不是標記語言, 而是一種風格頁面語言（style sheet
            language）：它能讓你在 HTML 文件中的元素（element）上套用不同的頁面樣式（style）。例如,
            當想要將 HTML 頁面上所有段落元素（paragraph
            elements）裡的文字全部轉換成紅色，你會在CSS裡寫:
          </span>
        </p>
      </div>
      <FloatToolbar isShow={isShow} top={rects.top} left={rects.left} />
    </>
  );
};

export default FloatToolbarExample;
