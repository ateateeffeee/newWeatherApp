const dom = (() => {

    const init = function() {
        //console.log('dom init');
        this.createHeader();
        this.createContentDiv();
        this.createSearchDiv();
        this.createFooter();
        document.getElementById('userInput').focus();
        
        
        //this.createCards();
    }

    const createHeader = function() {
        let header = document.createElement('div');
        header.id = 'header';

        let headerText = document.createElement('div');
        headerText.id = 'headerText';
        headerText.innerHTML = 'Current Weather';

        //Append
        document.body.append(header);

        header.append(headerText);
    }

    const createContentDiv = function() {
        let content = document.createElement('div');
        content.id = 'content';

        //Append
        document.body.append(content);
        console.log('appended the thing');
    }

    const createSearchDiv = function() {
        let content = document.getElementById('content');

        let div = document.createElement('div');
        div.id = 'searchDiv';

        let userInput = document.createElement('input');
        userInput.id = 'userInput';
        userInput.className = 'searchDivContents';
        userInput.value = 'London';

        let searchBtn = document.createElement('button');
        searchBtn.id = 'searchBtn';
        searchBtn.className = 'searchDivContents';
        searchBtn.innerHTML = 'Search';

        //Append
        div.append(userInput);
        div.append(searchBtn);

        content.append(div);
    }

    const createCards = function(temp, high, low, feelsLike, precip, humid, desc) {
        console.log('Make the cards');
        let content = document.getElementById('content');
        //Cards container
        let container = document.createElement('div');
        container.id = 'cardsContainer';
        
        content.append(container);

        //temp card
        createTempCard(temp, high, low, feelsLike);

        //precip card
        createPrecipCard(precip, humid);
        //desc card
        createDescCard(desc);
    }

    const createTempCard = function(temp, high, low, feelsLike) {
        let container = document.getElementById('cardsContainer');


        console.log('temp card');
        
        let card0 = document.createElement('div');
        card0.id = 'card0';
        card0.className = 'cards';

        let card0Title = document.createElement('div');
        card0Title.className = 'cardTitles';
        card0Title.innerHTML = 'Temperature';

        let tempText = document.createElement('div');
        tempText.id = 'currentTemp';
        tempText.className = 'temps';
        tempText.innerHTML = temp + '°';

        let highText = document.createElement('div');
        highText.id = 'highTemp';
        highText.innerHTML = high + '°';

        let lowText = document.createElement('div');
        lowText.id = 'lowTemp';
        lowText.innerHTML = low + '°';

        let feelsLikeText = document.createElement('div');
        feelsLikeText.className = 'cardData';
        feelsLikeText.innerHTML = "Feels like: " + feelsLike + '°';

        let highLowContainer = document.createElement('div');
        highLowContainer.id = 'highLowContainer';
        highLowContainer.className = 'temps';

        let tempContainer = document.createElement('div');
        tempContainer.id = 'tempContainer';

        //Append
        container.append(card0);

        highLowContainer.append(highText);
        highLowContainer.append(lowText);

        tempContainer.append(tempText);
        tempContainer.append(highLowContainer);

        //Title no longer necessary
        //card0.append(card0Title);

        card0.append(tempContainer);
        //card0.append(highText);
        //card0.append(lowText);
        //card0.append(highLowContainer)

        //Removing this for better formatting of temp, high, and low
        //card0.append(feelsLikeText);


    }

    const createPrecipCard = function(precip, humid) {
        let container = document.getElementById('cardsContainer');


        console.log('precip card');
        
        let card1 = document.createElement('div');
        card1.id = 'card1';
        card1.className = 'cards';

        let precipText = document.createElement('div');
        precipText.className = 'cardData';
        precipText.innerHTML = 'Precipitation: ' + precip + '%';

        let humidText = document.createElement('div');
        humidText.className = 'cardData';
        humidText.innerHTML = 'Humidity: ' + humid + '%';

        let card1TextContainer = document.createElement('div');
        card1TextContainer.id = 'card1Container';

        //Append
        container.append(card1);

        card1TextContainer.append(precipText);
        card1TextContainer.append(humidText);

        card1.append(card1TextContainer);

        //card1.append(precipText);
        //card1.append(humidText);


    }

    const createDescCard = function(desc) {
        let container = document.getElementById('cardsContainer');

        console.log('desc card');
        
        let card2 = document.createElement('div');
        card2.id = 'card2';
        card2.className = 'cards';

        let descText = document.createElement('div');
        descText.id = 'card2Desc';
        descText.className = 'cardData';
        descText.innerHTML = desc + '.';

        //Append
        container.append(card2);

        card2.append(descText);
    }

    const createFooter = function() {
        let content = document.getElementById('content');

        let footer = document.createElement('div');
        footer.id = 'footer';

        let text = document.createElement('div');
        text.id = 'footerText';
        text.innerHTML = 'Powered by BrockDiesel News';

        //Append
        document.body.append(footer);

        footer.append(text);

        console.log('hooray');
    }

    return {
        init,
        createHeader,
        createContentDiv,
        createSearchDiv,
        createCards,
        createFooter,
    }


})();

module.exports = dom;