function Btoc(tocList, contentElement, tocElement){
    this.tocList = tocList;
    this.elementList = getChild(contentElement, this.tocList);
    // 当前解析到第几个标签
    this.eIndex = 0;
    this.tocElement = tocElement;

    /**
     * 递归读取目标标签中所有的符合要求的标签
     * @param element
     * @param tocList
     * @returns {any[]|null}
     */
    function getChild(element, tocList){
        if(element == null){
            return null;
        }
        // 获取所有子元素
        var child = element.children;
        if(child.length == 0){
            return null;
        }
        var childs = new Array();
        for(var i = 0; i < child.length; i++){
            var elem = child[i];
            if(tocList.indexOf(elem.tagName) != -1){
                childs.push(elem);
            }
            childs.concat(getChild(elem, tocList));
            childs.push.apply(childs, getChild(elem, tocList));
        }
        return childs;
    }

    /**
     * 生成目录
     */
    this.build = function(){
        if(this.elementList == null || this.elementList.length === 0){
            return;
        }
        // 解析获取到的标签元素为目录
        // 设置当前元素的最小度为-1表示当前元素为最外层目录元素，防止后续出现比当前元素序号更小的标签
        tocElement.innerHTML = this.analysis(-1, this.tocList.indexOf(this.elementList[this.eIndex].tagName));
    }

    /**
     * 解析目录
     * @param last 最小的标签（即上级目录的标签）
     * @param depth 当前标签
     * @returns {string} 解析的目录内容
     */
    this.analysis = function(last, depth){
        var tocStr = "<ul>";
        while (this.eIndex < this.elementList.length){
            var elem = this.elementList[this.eIndex];
            // 取得当前元素在标签列表中所属的位置
            var n = this.tocList.indexOf(elem.tagName);
            // 当级别大于最大级别，小于当前级别时，就当做当前级别来处理，并将新的级别设置为新级别
            if (n > last && n <= depth){
                depth = n;
                var id = elem.id;
                var text = elem.innerText;
                // 标签不存在id，设置id
                if(id == null || id === ''){
                    id = text + "_" + this.eIndex;
                    elem.setAttribute('id',id)
                }
                tocStr += "<li><a href='#" + id + "'>" + text + "</a>";
                this.eIndex++;
                if(this.eIndex >= this.elementList.length){
                    tocStr += "</li>"
                    break;
                }
                n = this.tocList.indexOf(this.elementList[this.eIndex].tagName);
                // 如果下一个元素的序号大于当前元素的序号，那么元素为子元素，需要递归获取
                if (n > depth){
                    tocStr += this.analysis(depth, n);
                }
                tocStr += "</li>"
            } else if(n <= last){
                // 如果这个元素的序号已经小于最小序号了，那说明这个元素已经外面一层的元素了
                break;
            }
        }
        return tocStr + "</ul>";
    }
}
Btoc.init = function(params){
    var tocList = params['tocList'];
    var contentElement = params['contentElement'];
    var tocElement = params['tocElement'];
    if(tocList == null || tocList.length === 0 || contentElement == null || tocElement == null){
        return false;
    }
    for(var i=0;i<tocList.length;i++){
        tocList[i]= tocList[i].toUpperCase();
    }
    var btoc = new Btoc(tocList, contentElement, tocElement);
    btoc.build();
}