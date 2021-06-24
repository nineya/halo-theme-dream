function Btoc(tocList, contentElement, tocElement, scrollSpeed, headingsOffset){
  this.tocList = tocList;
  this.elementList = getChild(contentElement, this.tocList);
  this.eIndex = 0;
  this.tocElement = tocElement;
  this.scrollSpeed = scrollSpeed;
  this.headingsOffset = headingsOffset;
  
  function getChild(element, tocList){
    if(contentElement == null){
	  return null;
	}
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
	}
	return childs;
  }
  
  this.analysis = function(){
    if(this.elementList == null || this.elementList.length == 0){
	  return;
	}
    tocElement.innerHTML = this.doAnaly(-1, this.tocList.indexOf(this.elementList[this.eIndex].tagName));
	if(tocElement.children.length != 0){
	  tocElement.children[0].onclick = function(ev){
	    var target = ev.target;
	    if(target.tagName == 'LI'){
	      return target.children.length == 0? false: target.children[0].click();
	    }
	    if(ev.target.tagName != 'A'){
	      return false;
	    }
        var element = document.getElementById(ev.target.getAttribute("href").substring(1))
	    animateScroll(element,scrollSpeed,headingsOffset)
        return false;
      }
	}
  }
  
  this.doAnaly = function(last, depth){
    var tocStr = "<ul>";
	while (this.eIndex < this.elementList.length){
	   var elem = this.elementList[this.eIndex];
	   var n = this.tocList.indexOf(elem.tagName);
	   if (n > last && n <= depth){
	     depth = n;
	     var id = elem.id;
		 var text = elem.innerText;
		 if(id == null || id === ''){
		   id = text + "_" + this.eIndex;
		 }
	     tocStr += "<li><a href='#" + id + "'>" + text + "</a>";
		 this.eIndex++;
		 if(this.eIndex >= this.elementList.length){
			 break;
		 }
		 n = this.tocList.indexOf(this.elementList[this.eIndex].tagName);
		 if (n > depth){
	       tocStr += this.doAnaly(depth, n) + "</li>";
		 }
	   } else if(n <= last){
	     break;
	   }
	}
	return tocStr + "</ul>";
  }
  
  function animateScroll(element, time, headingsOffset) {
    let rect=element.getBoundingClientRect();
    let currentY=window.pageYOffset;
    let targetY=currentY+rect.top+headingsOffset;
    let speed = (targetY - currentY)/time;
    let offset = currentY > targetY? -1: 1;
    let requestId;
    function step(timestamp) {
      currentY+=speed;
      if(currentY * offset < targetY * offset){
        window.scrollTo(0,currentY);
        requestId=window.requestAnimationFrame(step);
      }else{
        window.scrollTo(0,targetY);
        window.cancelAnimationFrame(requestId);
      }
    }
    window.requestAnimationFrame(step);
  }
}
Btoc.init = function(params){
  var tocList = params['tocList'];
  for(var i=0;i<tocList.length;i++){
    tocList[i]= tocList[i].toUpperCase();
  }
  var contentElement = params['contentElement'];
  var tocElement = params['tocElement'];
  if(tocList == null || tocList.length == 0 || contentElement == null || tocElement == null){
    return false;
  }
  var btoc = new Btoc(tocList, contentElement, tocElement, params['scrollSpeed'], params['headingsOffset'] * -1);
  btoc.analysis();
}