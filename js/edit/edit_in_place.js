/**
 * @func 就地编辑
 * @author AANG_LI
 * 网站上的基础类 不需要重复造轮子
 * 不是具体的业务，抽象的统一的公共业务
 */
function EditInPlace({ id, parent, initVal } = { id: 'name-editor', parent: null, initVal: 'default value' }) {
    // 是一个对象，自身没有 constructor 的对象，只有原型上有 constructor
    this.id = id;
    this.parent = parent;
    this.value = initVal;
    this.createElement(); // 动态的DOM
    this.attachEvents(); // 创建所有监听事件
};

EditInPlace.prototype.createElement = function () {
    this.containerElement =
        document.createElement('div');
    this.containerElement.id = this.id;

    this.staticElement =
        document.createElement('span');
    this.staticElement.innerText = this.value;

    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    this.containerElement.appendChild(this.fieldElement);

    this.containerElement.appendChild(this.staticElement);
    this.parent.appendChild(this.containerElement);

    this.convertToText();

}

EditInPlace.prototype.convertToText = function () {
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}

EditInPlace.prototype.convertToEdit = function () {
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}

EditInPlace.prototype.attachEvents = function () {
    this.staticElement.addEventListener('click', () => {
        this.convertToEdit();
    }, false);
    this.fieldElement.addEventListener('keydown', () => {
        if (event.keyCode == 13) {
            this.staticElement.innerHTML = this.fieldElement.value;
            this.convertToText();
        }
    }, false);
}