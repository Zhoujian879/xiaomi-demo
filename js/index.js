// 导航栏显示隐藏
// 获取元素
const hide = document.querySelector('.hide-top')
const advertising = document.querySelector('.advertising')
window.addEventListener('scroll', function(){
    // html卷去头部的标签
        const n = document.documentElement.scrollTop
        // if被卷去的头部大于了标签元素那么就触发
        if (n >= advertising.offsetTop) {
            hide.style.opacity = 1
        } else {
            hide.style.opacity = 0
        }
    })
    // 电梯导航

const elevator = document.querySelector('.elevator')
window.addEventListener('scroll',function(){
    const n = document.documentElement.scrollTop
    if (n >= advertising.offsetTop) {
        elevator.style.opacity = 1
    } else {
        elevator.style.opacity = 0

    }
})
elevator.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        //    先删除后增加 
        const old = document.querySelector('.elevator .active')
        if (old) {
            old.classList.remove('active')
        }
        e.target.classList.add('active')
    }
})

const home = document.querySelector('.hometop')
home.addEventListener('click', () => {
    (window.scrollTo(0, 0))
})


// 轮播图
const obj = [{
        img: '/img/36b45c624f42fa81732457e3f9773dbd.webp'
    },
    {
        img: "./img/4c2ccbd65f5325796a6c2d8c984ca6b5.webp"
    },
    {
        img: "./img/815e1718487c0e8c760fcb5766269ddc.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    },
    {
        img: "./img/4e99c213a3dfd749f8cb406e18d05732.webp"
    }
]
const img = document.querySelector('.banner-img img')

for (let i = 0; i < obj.length; i++) {
    let i = 0
    let tmie = 0

    tmie = setInterval(function() {
        if (i > obj.length) {
            i = 0
        }
        i++
        img.src = obj[i].img
    }, 1000)
}