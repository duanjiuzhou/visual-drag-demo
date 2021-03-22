export default function resizeFontsize() {
    (function (win, doc) {
        function setRem() {
            console.log('setRem');

            const psdWidth = 375
            const fontSize = 16
            const htmlWidth = doc.documentElement.clientWidth || doc.body.clientWidth;
            // 以psd图为375宽时，默认字体大小为 16  750时对应32
            // 这样图纸测量多少，直接写就行，不用重新换算
            doc.documentElement.style.fontSize = `${fontSize * htmlWidth / psdWidth}px`
        }
        setRem()
        win.addEventListener('resize', function () {
            setRem()
        }, false)
    })(window, document)
}
