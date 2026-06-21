// World Clock JavaScript
// User can select a timezone they want, and the clock will display the current time in that timezone. 

const selector = document.getElementById('zone');

function backgroundGetter(timezone) {
    const backgroundMap = {
        'America/New_York': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1920px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg")',
        'America/Los_Angeles': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1920px-Los_Angeles_with_Mount_Baldy.jpg")',
        'America/Chicago': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Buckingham_Fountain_in_Chicago%2C_USA.jpg/1920px-Buckingham_Fountain_in_Chicago%2C_USA.jpg")',
        'America/Denver': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Denver%2C_Colorado_skyline_%28cropped%29.jpg/1920px-Denver%2C_Colorado_skyline_%28cropped%29.jpg")',
        'S.America/Argentina': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg/1920px-Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg")',
        'S.America/Chile': 'url("https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Chile/Santiago/219713_SCN_Santiago_iStock-913781186_Z5A29B.jpg?tr=w-1200%2Cfo-auto")',
        'S.America/Peru': 'url("https://cdn.adventure-life.com/16/63/43/iStock-1075517408/1300x820.webp")',
        'S.America/Bolivia': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Santa_Cruz_de_la_Sierra_3.jpg/1280px-Santa_Cruz_de_la_Sierra_3.jpg")',
        'S.America/Uruguay': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/The_City_%28198895997%29_%28cropped%29.jpg/1920px-The_City_%28198895997%29_%28cropped%29.jpg")',
        'S.America/Brazil': 'url("https://upload.wikimedia.org/wikipedia/commons/d/d0/Cidade_de_S%C3%A3o_Paulo.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=original")',
        'Africa/Nigeria': 'url("https://upload.wikimedia.org/wikipedia/commons/f/f4/Tafa_Balewa_Square_%28Onikan%29_in_Lagos._Nigeria.jpg")',
        'Africa/Egypt': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg/1280px-Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg")',
        'Europe/Paris': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg")',
        'Europe/London': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg")',
        'Europe/Russia': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/1920px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg")',
        'Asia/India': 'url("https://www.christiesrealestate.com/resizer/v2/7DH5RMCRLVHWHOU5AKV4J2IG64.jpg?auth=fce78d64946e994fb47cad2b726c805478d1175fd3481fc7cd38c16ed89b1b89")',
        'Asia/Hong_Kong': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Avenue_of_Stars%2C_Hong_Kong_%282052819038%29.jpg/1280px-Avenue_of_Stars%2C_Hong_Kong_%282052819038%29.jpg")',
        'Asia/Tokyo': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/1280px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg")',
        'Asia/S.Korea': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Seoul_%28175734251%29_%28cropped%29.jpg/1920px-Seoul_%28175734251%29_%28cropped%29.jpg")',
        'Asia/China': 'url("https://rootsabroadtravel.com/wp-content/uploads/2026/04/aerial-view-of-the-pudong-skyline-with-its-famous-skyscrapers-in-shanghai-at-night-1170x600.jpg")',
        'Asia/Thailand': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1280px-4Y1A1159_Bangkok_%2833536795515%29.jpg")',
        'Australia/Sydney': 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1920px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg")',
        // Add more timezones and their background images here
    };
    return backgroundMap[timezone] || backgroundMap['Your Time Zone'];
}

function matchTimezone(timezone) {
    const timezoneMap = {
        'America/New_York': 'America/New_York',
        'America/Los_Angeles': 'America/Los_Angeles',
        'America/Chicago': 'America/Chicago',
        'America/Denver': 'America/Denver',
        'S.America/Argentina': 'America/Argentina/Buenos_Aires',
        'S.America/Chile': 'America/Santiago',
        'S.America/Peru': 'America/Lima',
        'S.America/Bolivia': 'America/La_Paz',
        'S.America/Uruguay': 'America/Montevideo',
        'S.America/Brazil': 'America/Sao_Paulo',
        'Africa/Nigeria': 'Africa/Lagos',
        'Africa/Egypt': 'Africa/Cairo',
        'Europe/Paris': 'Europe/Paris',
        'Europe/London': 'Europe/London',
        'Europe/Russia': 'Europe/Moscow',
        'Asia/India': 'Asia/Kolkata',
        'Asia/Hong_Kong': 'Asia/Hong_Kong',
        'Asia/Tokyo': 'Asia/Tokyo',
        'Asia/S.Korea': 'Asia/Seoul',
        'Asia/China': 'Asia/Shanghai',
        'Asia/Thailand': 'Asia/Bangkok',
        'Australia/Sydney': 'Australia/Sydney'
    };
    return timezoneMap[timezone] || timezone;
}

const clockMap = {
    'America/New_York': 'clock-EST',
    'America/Los_Angeles': 'clock-PST',
    'America/Chicago': 'clock-CST',
    'America/Denver': 'clock-MST',
    'S.America/Argentina': 'clock-ART',
    'S.America/Chile': 'clock-CLT',
    'S.America/Peru': 'clock-PET',
    'S.America/Bolivia': 'clock-BOT',
    'S.America/Uruguay': 'clock-UYT',
    'S.America/Brazil': 'clock-BRT',
    'Africa/Nigeria': 'clock-WAT',
    'Africa/Egypt': 'clock-EET',
    'Europe/Paris': 'clock-CET',
    'Europe/London': 'clock-GMT',
    'Europe/Russia': 'clock-MSK',
    'Asia/India': 'clock-IST',
    'Asia/Hong_Kong': 'clock-HKT',
    'Asia/Tokyo': 'clock-JST',
    'Asia/S.Korea': 'clock-KST',
    'Asia/China': 'clock-CST-CHINA',
    'Asia/Thailand': 'clock-ICT',
    'Australia/Sydney': 'clock-AEST'
};

function displayBackground(timezone) {
    const backgroundUrl = backgroundGetter(timezone);
    document.body.style.backgroundImage = backgroundUrl;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

function updateClock() {
    const currentTime = new Date();
    const selectedValue = selector.value;
    const matchedTimezone = matchTimezone(selectedValue);

    const timeString = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: matchedTimezone
    }).format(currentTime);

    const clockId = clockMap[selectedValue];
    if (clockId) {
        const clockContainer = document.querySelector('.clock');
        clockContainer.querySelectorAll('div').forEach(div => {
            div.style.display = 'none';
        });

        const clockElement = document.getElementById(clockId);
        if (clockElement) {
            clockElement.textContent = timeString;
            clockElement.style.display = 'block';
        }
    }

    displayBackground(selectedValue);
    console.log(`Selected: ${selectedValue}, Timezone: ${matchedTimezone}, Time: ${timeString}`);
}

updateClock();
displayBackground(selector.value);
selector.addEventListener('change', updateClock);
setInterval(updateClock, 1000);