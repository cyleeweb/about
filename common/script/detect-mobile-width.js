var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var deviceWidth = window.screen.availWidth;
switch (isMobile) {
    case deviceWidth <= 360:
        document.write('<meta name="viewport" content="initial-scale=0.3, user-scalable=yes">');
        break;
    case (deviceWidth >= 361) && (deviceWidth <= 420):
        document.write('<meta name="viewport" content="initial-scale=0.35, user-scalable=yes">');
        break;
    case (deviceWidth >= 421) && (deviceWidth <= 480):
        document.write('<meta name="viewport" content="initial-scale=0.4, user-scalable=yes">');
        break;
    case (deviceWidth >= 481) && (deviceWidth <= 540):
        document.write('<meta name="viewport" content="initial-scale=0.45, user-scalable=yes">');
        break;
    case (deviceWidth >= 541) && (deviceWidth <= 600):
        document.write('<meta name="viewport" content="initial-scale=0.5, user-scalable=yes">');
        break;
    case (deviceWidth >= 601) && (deviceWidth <= 660):
        document.write('<meta name="viewport" content="initial-scale=0.55, user-scalable=yes">');
        break;
    case (deviceWidth >= 661) && (deviceWidth <= 720):
        document.write('<meta name="viewport" content="initial-scale=0.6, user-scalable=yes">');
        break;
    case (deviceWidth >= 721) && (deviceWidth <= 780):
        document.write('<meta name="viewport" content="initial-scale=0.65, user-scalable=yes">');
        break;
    case (deviceWidth >= 781) && (deviceWidth <= 840):
        document.write('<meta name="viewport" content="initial-scale=0.7, user-scalable=yes">');
        break;
    case (deviceWidth >= 841) && (deviceWidth <= 900):
        document.write('<meta name="viewport" content="initial-scale=0.75, user-scalable=yes">');
        break;
    case (deviceWidth >= 901) && (deviceWidth <= 960):
        document.write('<meta name="viewport" content="initial-scale=0.8, user-scalable=yes">');
        break;
    case (deviceWidth >= 961) && (deviceWidth <= 1020):
        document.write('<meta name="viewport" content="initial-scale=0.85, user-scalable=yes">');
        break;
    case (deviceWidth >= 1021) && (deviceWidth <= 1080):
        document.write('<meta name="viewport" content="initial-scale=0.9, user-scalable=yes">');
        break;
}