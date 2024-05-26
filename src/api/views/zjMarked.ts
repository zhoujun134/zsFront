import {Marked} from 'marked';
import {markedHighlight} from "marked-highlight"
import hljs from 'highlight.js'
//引入markdown样式
import 'highlight.js/styles/atom-one-dark.css'
import '@/assets/css/detail/detail.css'
import {ElMessage} from "element-plus";

/**
 * @param {String} content 代码内容
 * @param {String} lang 代码语言
 * @returns table标签及内容
 */
export const lineNumbers = (content: string, lang: string): string => {
    // 验证当前语言是否存在
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    // 使代码转换成带有标签的节点
    const textHtml = hljs.highlight(content, {language}).value;

    // 如果不想添加行号可以直接
    // return textHtml;

    // 返回分割后的数组
    const lines = getLines(textHtml);

    // 自定义代码块的标签节点
    let html = '';
    for (let i = 0, l = lines.length; i < l; i++) {
        let text = lines[i].length > 0 ? lines[i] : ' '
        html += `<tr>
                <td class="blob-num" data-line-number="${i}"></td>
                <td class="blob-code blob-code-inner">${text}</td>
              </tr>`;
    }
    return `<table class="hljs highlight">${html}</table>`;
}

// 根据换行符或回车分割成字符串数组
const getLines = (text: string) => {
    if (text.length === 0) return [];
    return text.split(/\r\n|\r|\n/g);
}

const marked: Marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext'
            // 添加行数后的代码
            return lineNumbers(code, language)
        }
    },)
)
// 自定义渲染器
const renderer = new marked.Renderer();
// 针对图片的处理
renderer.image = (href: string, title: string | null, text: string): string => {
    return ` 
<div class="zj-blog-content-img-container">  
    <img class="zj-blog-content-img" src="${href}" title="${title}" alt="${text}" 
     />  
</div> 
`;
};

// 针对 列表的处理
renderer.list = function (body: string, ordered: boolean): string {
    const type = ordered ? 'ol' : 'ul';
    return `<${type} class="zj-custom-ul">${body}</${type}>`;
};

marked.setOptions({renderer: renderer})

export {marked}

/**
 * 给代码块儿的右边添加复制按钮
 */
export function dealWithCopy(): void {
    const codeBlocks: NodeList = document.querySelectorAll("pre code")
    codeBlocks.forEach((block: Node) => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'zj-copy-btn';
        copyBtn.textContent = '复制';
        copyBtn.addEventListener('click', () => {
            const code: string = block.textContent ? block.textContent : "";
            navigator.clipboard.writeText(code).then(() => {
                ElMessage.success({
                    message: "代码已复制到剪贴板",
                    duration: 5 * 1000
                })
            });
        });
        if (block.parentNode) {
            // 将复制按钮添加到代码块中
            block.parentNode.insertBefore(copyBtn, block);
        }
    });
}
