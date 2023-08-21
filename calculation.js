document.getElementById('div1').addEventListener('click', function () {
    const main = document.getElementById('main')
    const cardTitle1 = document.getElementById('card-1-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-1');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }
})
document.getElementById('div2').addEventListener('click', function () {
    const main = document.getElementById('main')
    const cardTitle1 = document.getElementById('card-2-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-2');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }
})
document.getElementById('div3').addEventListener('click', function () {
    const main = document.getElementById('main')
    const cardTitle1 = document.getElementById('card-3-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-3');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }
})
document.getElementById('div4').addEventListener('click', function () {
    const main = document.getElementById('main')
    const cardTitle1 = document.getElementById('card-4-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-4');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }
})
document.getElementById('div5').addEventListener('click', function () {
    const main = document.getElementById('main')

    const cardTitle1 = document.getElementById('card-5-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-5');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }
})
document.getElementById('div6').addEventListener('click', function () {
    const main = document.getElementById('main')
    const cardTitle1 = document.getElementById('card-6-title')
    const cardText1 = cardTitle1.innerText;
    const li = document.createElement('li')
    li.innerText = cardText1;
    li.classList.add('class1')
    main.appendChild(li);
    const taka1 = document.getElementById('taka-6');
    taka1Sting = parseFloat(taka1.innerText);
    const previousTaka = document.getElementById('total-price')
    const previousTakaSring = parseFloat(previousTaka.innerText);
    const totaltaka = previousTakaSring + taka1Sting;
    const pricetaka = previousTaka.innerText = totaltaka.toFixed(2)
    previousTaka.classList.add('class2')
    const countmain = main.childElementCount;
    li.innerHTML = `${ countmain}.  ${cardText1}`
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    if (pricetaka > 0 && pricetaka < 200) {
        btn2.removeAttribute('disabled')
    } else if (pricetaka >= 200) {
        btn1.removeAttribute('disabled')
        document.getElementById('btn1').addEventListener('click', function () {
            const input = document.getElementById('input')
            const inputValue = input.value
            if (inputValue == 'SELL200') {
                const discountParsent = (pricetaka * 20) / 100;
                const discount = document.getElementById('discount');
                const Newdiscount = discount.innerText = discountParsent.toFixed(2);
                discount.classList.add('class2')
                const previoustotal = document.getElementById('total')
                const total = parseFloat(pricetaka) - parseFloat(Newdiscount);
                previoustotal.innerText = total.toFixed(2);
                previoustotal.classList.add('class2')
            }
        })
    }

})