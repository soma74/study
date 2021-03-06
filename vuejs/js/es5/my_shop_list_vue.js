var data = {
    items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
    title: 'My Shopping List'
};

new Vue({
    el: '#app',
    data: data,
});

// 아이템 컴포넌트 추가
Vue.component('add-item-component', {
    template: '#add-item-template',
    data: function() {
        return {
            newItem: '',
            data: data
        };
    },
    methods: {
        addItem: function () {
            var text;

            text = this.newItem.trim();
            if (text) {
                this.items.push({
                    text: text,
                    checked: false
                 });
                this.newItem = '';
            }
        }
    }
});

// 아이템 컴포넌트
Vue.component('item-component', {
    template: '#item-template',
    props: ['item']
});

// 아이템 컴포넌트
Vue.component('items-component', {
    template: '#items-template',
    props: ['items']
});

// 제목 컴포넌트 변경
Vue.component('change-title-component', {
    template: '#change-title-template',
    props: ['value'],
    methods: {
        onInput: function(event) {
            this.$emit('input', event.target.value);
        }
    }
});

