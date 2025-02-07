const music = document.getElementById("bg-music");
const playButton = document.getElementById("play-music");
const messageBox = document.getElementById("message");
const loveMessageContainer = document.querySelector(".love-message");

// 文字内容
const loveMessage = "Happy Birthday 🥳Big Superise！！！🎂🎂🎂祝我最爱的宝宝，猪猪，小窝瓜，火爆辣椒，小傻子，小笨蛋和最爱最爱的游家安宝宝生日快乐呀！！！~\\(≧▽≦)/~20岁是一个很重要的生日呢，宝宝的人生已经迈入了下一阶段，还好命运让我赶上了这一重要时刻😋我们都是最幸运的能在人生中最好的年华碰见彼此，相互鼓励一起进步，20岁真是一个很迷茫的阶段啊，但是没事的，我们都有彼此的陪伴，尽管前方满是荆棘我相信我们也一定能够披荆斩棘有一个happy ending的↖(^ω^)↗在这里我向宝宝许下一个诺言，今生今世我只嫁给游家安一人，并且每年生日无论何时何地我都会第一时间向宝宝送出生日祝福，以后的岁岁年年都会有我🫶🏻🫶🏻🫶🏻Anyways在这个人生的新阶段愿宝宝能健康快乐，心想事成！雅思一举夺魁，所愿皆所得💫✨ 从相识到现在，每一刻都无比珍贵，未来还有好多好多年，我都想紧紧牵着你的手陪你走过每一个春夏秋冬，生日快乐！！！我的亲爱的小宝贝我最最最爱你了💋💋💋";
let index = 0;

// 播放音乐 & 文字打字效果
playButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playButton.textContent = "暂停音乐 ⏸";
        startTyping();
    } else {
        music.pause();
        playButton.textContent = "播放音乐 🎵";
    }
});

// 逐字显示文字
function startTyping() {
    loveMessageContainer.style.display = "block";
    messageBox.textContent = "";
    index = 0;

    function type() {
        if (index < loveMessage.length) {
            messageBox.textContent += loveMessage[index];
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}