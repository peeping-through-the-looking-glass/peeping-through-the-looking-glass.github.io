export class Tool {
    constructor() {};

    createElement(type, elementId, classname, parent, content) {
      const element = document.createElement(type);
      if (elementId != null) element.id = elementId;
      if (classname != null) element.className = classname;
      if (parent != null) parent.appendChild(element);
      else document.getElementById("hidden")?.appendChild(element);
      if (content != null) element.innerText += content;
      return element;
    }

    createImgElement(elementId, classname, parent, src) {
      const element = document.createElement("img");
      if (elementId != null) element.id = elementId;
      if (classname != null) element.className = classname;
      if (src != null) element.src = src;
      if (parent != null) parent.appendChild(element);
      else document.getElementById("hidden")?.appendChild(element);
      return element;
    }

    strlen(str) {
      var i = 0;
      while (str[i] !== undefined)
        i++;
      return i;
    }
    
};