let defaultCity = '北京';

try {
    if (localStorage.city)
        defaultCity = localStorage.city;
} catch (e){}//避免浏览器不支持


export default {
    city: defaultCity
}