// 加载完成执行
window.onload = function() {
    selection();
    askQuestions();
    wordMadal();
    console.log('hello');
}

// 点击选项卡 切换选项
function selection() {
    // 获取选项卡总菜单
    let allSelect = document.querySelector('.selection');
    // 获取显示条目总目录
    let allItems = document.querySelectorAll('.detail-feature > div');
    allSelect.onclick = function(event) {
        let selectedNode = event.target;
        if(selectedNode.className === 'selected-item') {
            console.log(allItems.length);
        }else {
            if(selectedNode.tagName === 'LI'){
                let lis = document.querySelectorAll('.selection > li');
                for(let i=0; i<lis.length; i++){
                    if(lis[i] === selectedNode) {
                        selectedNode.className = 'selected-item';
                        allItems[i].id = 'showItem';
                    }else {
                        lis[i].className = '';
                        allItems[i].id = '';
                    }
                }
            }
        }
    }
}

// 点击“我要提问”打开弹窗
function askQuestions() {
    let imgQuestion = document.querySelector('.question');
    let modal = document.querySelector('#modal');
    let askQuestion = document.querySelector('#askQuestion');
    let buttonCancle = document.querySelector('.question-buttons  button:first-child');
    let buttonSure = document.querySelector('.question-buttons button:last-child');
    let textarea = document.querySelector('#askQuestion textarea');


    imgQuestion.onclick = function() {
        modal.style.display = "block";
        askQuestion.style.display = "block";

    }
    buttonCancle.onclick = function() {
        modal.style.display = "none";
        askQuestion.style.display = "none";
        textarea.value = '';
    }
    buttonSure.onclick = function() {
        modal.style.display = "none";
        askQuestion.style.display = "none";
        textarea.value = '';
    }
}

// 点击文字打开弹窗 点击叉号关闭弹窗
function wordMadal() {
    let wordDetail = document.querySelector('#wordDetail');
    let detailMoney = document.querySelector('.geshui .detail_money');
    let closeImg = document.querySelector('#detail_close');
    let modal = document.querySelector('#modal');

    wordDetail.onclick = function() {
        detailMoney.style.display = 'block';
        modal.style.display = 'block';
    }
    closeImg.onclick = function() {
        detailMoney.style.display = 'none';
        modal.style.display = 'none';
    }
}