(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _mapboxGlDrawCircle = require("mapbox-gl-draw-circle");

require("@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css");

/*
 * index.js
 * Copyright (C) 2019 Devon Proctor <devon.proctor@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var mapboxgl = require('mapbox-gl');

var MapboxDraw = require('@mapbox/mapbox-gl-draw');

mapboxgl.accessToken = 'pk.eyJ1IjoiZHBybyIsImEiOiJjamhrNG03N2gweHFrMzdxb3A3ZXc2MDd2In0.FC_fu8WvE7POuOeYMUGHyg';
var map = new mapboxgl.Map({
  container: 'map',
  // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  // hosted style id
  center: [-98.583333, 39.833333],
  // starting position
  zoom: 3 // starting zoom

});
var draw = new MapboxDraw({
  // displayControlsDefault: false,
  // controls: {
  // polygon: true,
  // trash: true
  //},
  defaultMode: "draw_circle",
  userProperties: true,
  modes: {
    draw_circle: _mapboxGlDrawCircle.CircleMode,
    drag_circle: _mapboxGlDrawCircle.DragCircleMode,
    direct_select: _mapboxGlDrawCircle.DirectMode,
    simple_select: _mapboxGlDrawCircle.SimpleSelectMode
  }
});
map.addControl(draw);
map.on('draw.selectionchange', updateSelection);

function drawCircle(id, centerLon, centerLat, radiusInKm, coordinates) {
  draw.add({
    'id': id,
    'type': 'Feature',
    'properties': {
      'center': [centerLon, centerLat],
      'isCircle': true,
      'radiusInKm': radiusInKm,
      "stroke": "#555555",
      "fill": "#555555",
      "fill-opacity": 0.5
    },
    'geometry': {
      'type': 'Polygon',
      'coordinates': coordinates
    }
  });
}

map.on('load', function () {
  drawCircle('mom-estimate', -120.81966112500022, 36.15174610451875, 300, [[[-120.81966112500021, 38.75954791557352], [-121.14193463585386, 38.7465699261807], [-121.46078098131375, 38.707774413423856], [-121.77282051654176, 38.6435747846433], [-122.0747674148452, 38.55465357614268], [-122.36347358336049, 38.44195292456444], [-122.63596916040663, 38.30666158651281], [-122.88949872870967, 38.15019884184832], [-123.12155258347464, 37.97419567974789], [-123.32989261730457, 37.780473710205825], [-123.51257260912259, 37.571022266521716], [-123.66795291683863, 37.34797416738557], [-123.79470976145878, 37.11358059261943], [-123.89183944507266, 36.87018549759716], [-123.95865796181732, 36.62019995151318], [-123.99479653826467, 36.366076737840984], [-124.00019367954643, 36.11028550517332], [-123.97508430412392, 35.85528870639116], [-123.91998652918424, 35.60351851638958], [-123.83568662671365, 35.35735487533089], [-123.72322261395273, 35.1191047668405], [-123.58386687731127, 34.890982809317705], [-123.41910816122265, 34.675093213662336], [-123.23063318713486, 34.47341314185587], [-123.02030810605831, 34.28777748731178], [-122.7901599329513, 34.1198650888685], [-122.54235806390443, 33.97118638480039], [-122.2791959379731, 33.84307251033257], [-122.0030728743603, 33.736665841003536], [-121.7164760917861, 33.652911984083275], [-121.42196289931951, 33.59255322053401], [-121.1221430355878, 33.55612340026949], [-120.81966112500021, 33.54394429346398], [-120.51717921441265, 33.55612340026949], [-120.21735935068092, 33.59255322053401], [-119.92284615821433, 33.652911984083275], [-119.63624937564013, 33.736665841003536], [-119.36012631202735, 33.84307251033257], [-119.096964186096, 33.97118638480039], [-118.84916231704915, 34.1198650888685], [-118.61901414394212, 34.28777748731178], [-118.40868906286559, 34.47341314185587], [-118.22021408877778, 34.67509321366232], [-118.05545537268917, 34.890982809317705], [-117.9160996360477, 35.1191047668405], [-117.80363562328678, 35.35735487533089], [-117.7193357208162, 35.60351851638958], [-117.66423794587652, 35.85528870639116], [-117.639128570454, 36.11028550517332], [-117.64452571173578, 36.366076737840984], [-117.68066428818312, 36.62019995151318], [-117.74748280492778, 36.87018549759716], [-117.84461248854164, 37.11358059261943], [-117.97136933316182, 37.34797416738557], [-118.12674964087785, 37.571022266521716], [-118.30942963269588, 37.780473710205825], [-118.51776966652581, 37.97419567974789], [-118.74982352129078, 38.15019884184832], [-119.00335308959382, 38.30666158651281], [-119.27584866663996, 38.44195292456444], [-119.56455483515525, 38.55465357614268], [-119.86650173345866, 38.6435747846433], [-120.1785412686867, 38.707774413423856], [-120.49738761414659, 38.7465699261807], [-120.81966112500021, 38.75954791557352]]]);
  drawCircle('chris-estimate', -74.3255204999998, 40.96387554729806, 300, [[[-74.32552049999978, 43.57167735835283], [-74.64779401085343, 43.558699368960006], [-74.96664035631332, 43.519903856203165], [-75.27867989154133, 43.45570422742261], [-75.58062678984477, 43.366783018921986], [-75.86933295836006, 43.25408236734375], [-76.1418285354062, 43.11879102929212], [-76.39535810370924, 42.96232828462763], [-76.62741195847421, 42.7863251225272], [-76.83575199230414, 42.592603152985134], [-77.01843198412216, 42.383151709301025], [-77.1738122918382, 42.16010361016488], [-77.30056913645835, 41.92571003539874], [-77.39769882007224, 41.68231494037647], [-77.4645173368169, 41.43232939429249], [-77.50065591326424, 41.17820618062029], [-77.506053054546, 40.92241494795263], [-77.4809436791235, 40.667418149170466], [-77.42584590418382, 40.415647959168886], [-77.34154600171323, 40.1694843181102], [-77.2290819889523, 39.93123420961981], [-77.08972625231084, 39.703112252097014], [-76.92496753622223, 39.487222656441645], [-76.73649256213443, 39.28554258463518], [-76.52616748105788, 39.09990693009109], [-76.29601930795087, 38.93199453164781], [-76.048217438904, 38.7833158275797], [-75.78505531297267, 38.65520195311188], [-75.50893224935987, 38.548795283782844], [-75.22233546678568, 38.465041426862584], [-74.92782227431908, 38.40468266331332], [-74.62800241058737, 38.3682528430488], [-74.32552049999978, 38.35607373624329], [-74.02303858941222, 38.3682528430488], [-73.7232187256805, 38.40468266331332], [-73.4287055332139, 38.465041426862584], [-73.14210875063971, 38.548795283782844], [-72.86598568702692, 38.65520195311188], [-72.60282356109558, 38.7833158275797], [-72.35502169204872, 38.93199453164781], [-72.1248735189417, 39.09990693009109], [-71.91454843786516, 39.28554258463518], [-71.72607346377735, 39.48722265644163], [-71.56131474768874, 39.703112252097014], [-71.42195901104728, 39.93123420961981], [-71.30949499828635, 40.1694843181102], [-71.22519509581578, 40.415647959168886], [-71.1700973208761, 40.667418149170466], [-71.14498794545358, 40.92241494795263], [-71.15038508673535, 41.17820618062029], [-71.1865236631827, 41.43232939429249], [-71.25334217992736, 41.68231494037647], [-71.35047186354122, 41.92571003539874], [-71.47722870816139, 42.16010361016488], [-71.63260901587742, 42.383151709301025], [-71.81528900769545, 42.592603152985134], [-72.02362904152538, 42.7863251225272], [-72.25568289629035, 42.96232828462763], [-72.50921246459339, 43.11879102929212], [-72.78170804163953, 43.25408236734375], [-73.07041421015482, 43.366783018921986], [-73.37236110845824, 43.45570422742261], [-73.68440064368627, 43.519903856203165], [-74.00324698914616, 43.558699368960006], [-74.32552049999978, 43.57167735835283]]]);
  drawCircle('haley-estimate', -77.31380175000034, 40.01921998621387, 300, [[[-77.31380175000032, 42.62702179726864], [-77.63607526085397, 42.61404380787582], [-77.95492160631386, 42.575248295118975], [-78.26696114154187, 42.51104866633842], [-78.56890803984531, 42.422127457837796], [-78.8576142083606, 42.30942680625956], [-79.13010978540675, 42.17413546820793], [-79.38363935370978, 42.01767272354344], [-79.61569320847475, 41.84166956144301], [-79.82403324230468, 41.647947591900945], [-80.0067132341227, 41.438496148216835], [-80.16209354183874, 41.21544804908069], [-80.28885038645889, 40.98105447431455], [-80.38598007007278, 40.73765937929228], [-80.45279858681744, 40.4876738332083], [-80.48893716326478, 40.2335506195361], [-80.49433430454654, 39.97775938686844], [-80.46922492912404, 39.722762588086276], [-80.41412715418436, 39.4709923980847], [-80.32982725171377, 39.22482875702601], [-80.21736323895284, 38.98657864853562], [-80.07800750231138, 38.758456691012825], [-79.91324878622277, 38.542567095357455], [-79.72477381213497, 38.34088702355099], [-79.51444873105842, 38.1552513690069], [-79.28430055795141, 37.98733897056362], [-79.03649868890454, 37.83866026649551], [-78.77333656297321, 37.71054639202769], [-78.49721349936041, 37.604139722698655], [-78.21061671678622, 37.520385865778394], [-77.91610352431962, 37.46002710222913], [-77.61628366058791, 37.42359728196461], [-77.31380175000032, 37.4114181751591], [-77.01131983941276, 37.42359728196461], [-76.71149997568104, 37.46002710222913], [-76.41698678321444, 37.520385865778394], [-76.13039000064025, 37.604139722698655], [-75.85426693702746, 37.71054639202769], [-75.59110481109612, 37.83866026649551], [-75.34330294204926, 37.98733897056362], [-75.11315476894224, 38.1552513690069], [-74.9028296878657, 38.34088702355099], [-74.7143547137779, 38.54256709535744], [-74.54959599768928, 38.758456691012825], [-74.41024026104782, 38.98657864853562], [-74.2977762482869, 39.22482875702601], [-74.21347634581632, 39.4709923980847], [-74.15837857087664, 39.722762588086276], [-74.13326919545412, 39.97775938686844], [-74.1386663367359, 40.2335506195361], [-74.17480491318324, 40.4876738332083], [-74.2416234299279, 40.73765937929228], [-74.33875311354176, 40.98105447431455], [-74.46550995816193, 41.21544804908069], [-74.62089026587796, 41.438496148216835], [-74.803570257696, 41.647947591900945], [-75.01191029152592, 41.84166956144301], [-75.24396414629089, 42.01767272354344], [-75.49749371459393, 42.17413546820793], [-75.76998929164007, 42.30942680625956], [-76.05869546015536, 42.422127457837796], [-76.36064235845878, 42.51104866633842], [-76.67268189368681, 42.575248295118975], [-76.9915282391467, 42.61404380787582], [-77.31380175000032, 42.62702179726864]]]);
  drawCircle('devon-estimate', -122.57747362499974, 38.19338911083314, 300, [[[-122.57747362499973, 40.80119092188791], [-122.89974713585337, 40.788212932495085], [-123.21859348131326, 40.74941741973824], [-123.53063301654127, 40.68521779095769], [-123.83257991484471, 40.596296582457065], [-124.12128608336, 40.48359593087883], [-124.39378166040615, 40.3483045928272], [-124.64731122870919, 40.19184184816271], [-124.87936508347416, 40.01583868606228], [-125.08770511730408, 39.82211671652021], [-125.2703851091221, 39.612665272836104], [-125.42576541683815, 39.38961717369996], [-125.5525222614583, 39.155223598933816], [-125.64965194507218, 38.91182850391155], [-125.71647046181684, 38.66184295782757], [-125.75260903826418, 38.40771974415537], [-125.75800617954594, 38.15192851148771], [-125.73289680412344, 37.896931712705545], [-125.67779902918376, 37.645161522703965], [-125.59349912671317, 37.39899788164528], [-125.48103511395225, 37.16074777315489], [-125.34167937731078, 36.93262581563209], [-125.17692066122217, 36.716736219976724], [-124.98844568713437, 36.51505614817026], [-124.77812060605783, 36.329420493626166], [-124.54797243295081, 36.16150809518289], [-124.30017056390395, 36.01282939111478], [-124.03700843797262, 35.884715516646956], [-123.76088537435982, 35.77830884731792], [-123.47428859178562, 35.69455499039766], [-123.17977539931903, 35.634196226848395], [-122.87995553558731, 35.59776640658388], [-122.57747362499973, 35.58558729977837], [-122.27499171441217, 35.59776640658388], [-121.97517185068044, 35.634196226848395], [-121.68065865821384, 35.69455499039766], [-121.39406187563965, 35.77830884731792], [-121.11793881202686, 35.884715516646956], [-120.85477668609552, 36.01282939111478], [-120.60697481704867, 36.16150809518289], [-120.37682664394164, 36.329420493626166], [-120.16650156286511, 36.51505614817026], [-119.9780265887773, 36.71673621997671], [-119.81326787268868, 36.93262581563209], [-119.67391213604722, 37.16074777315489], [-119.5614481232863, 37.39899788164528], [-119.47714822081572, 37.645161522703965], [-119.42205044587604, 37.896931712705545], [-119.39694107045352, 38.15192851148771], [-119.4023382117353, 38.40771974415537], [-119.43847678818264, 38.66184295782757], [-119.5052953049273, 38.91182850391155], [-119.60242498854116, 39.155223598933816], [-119.72918183316133, 39.38961717369996], [-119.88456214087736, 39.612665272836104], [-120.0672421326954, 39.82211671652021], [-120.27558216652533, 40.01583868606228], [-120.5076360212903, 40.19184184816271], [-120.76116558959333, 40.3483045928272], [-121.03366116663948, 40.48359593087883], [-121.32236733515477, 40.596296582457065], [-121.62431423345818, 40.68521779095769], [-121.93635376868622, 40.74941741973824], [-122.2552001141461, 40.788212932495085], [-122.57747362499973, 40.80119092188791]]]);
  drawCircle('doug-estimate', -104.90371345637227, 39.9807164547761, 300, [[[-104.90371345637226, 42.58851826583087], [-105.22598696722591, 42.57554027643805], [-105.5448333126858, 42.536744763681206], [-105.8568728479138, 42.47254513490065], [-106.15881974621725, 42.38362392640003], [-106.44752591473254, 42.27092327482179], [-106.72002149177868, 42.13563193677016], [-106.97355106008172, 41.97916919210567], [-107.20560491484669, 41.803166030005244], [-107.41394494867662, 41.609444060463176], [-107.59662494049464, 41.399992616779066], [-107.75200524821068, 41.17694451764292], [-107.87876209283083, 40.94255094287678], [-107.97589177644471, 40.69915584785451], [-108.04271029318937, 40.44917030177053], [-108.07884886963672, 40.195047088098335], [-108.08424601091848, 39.93925585543067], [-108.05913663549597, 39.68425905664851], [-108.00403886055629, 39.43248886664693], [-107.9197389580857, 39.18632522558824], [-107.80727494532478, 38.94807511709785], [-107.66791920868332, 38.719953159575056], [-107.5031604925947, 38.504063563919686], [-107.3146855185069, 38.30238349211322], [-107.10436043743036, 38.11674783756913], [-106.87421226432335, 37.94883543912585], [-106.62641039527648, 37.80015673505774], [-106.36324826934515, 37.67204286058992], [-106.08712520573235, 37.565636191260886], [-105.80052842315816, 37.481882334340625], [-105.50601523069156, 37.42152357079136], [-105.20619536695985, 37.38509375052684], [-104.90371345637226, 37.37291464372133], [-104.6012315457847, 37.38509375052684], [-104.30141168205297, 37.42152357079136], [-104.00689848958638, 37.481882334340625], [-103.72030170701218, 37.565636191260886], [-103.4441786433994, 37.67204286058992], [-103.18101651746805, 37.80015673505774], [-102.9332146484212, 37.94883543912585], [-102.70306647531417, 38.11674783756913], [-102.49274139423764, 38.30238349211322], [-102.30426642014983, 38.50406356391967], [-102.13950770406122, 38.719953159575056], [-102.00015196741975, 38.94807511709785], [-101.88768795465883, 39.18632522558824], [-101.80338805218825, 39.43248886664693], [-101.74829027724857, 39.68425905664851], [-101.72318090182605, 39.93925585543067], [-101.72857804310783, 40.195047088098335], [-101.76471661955517, 40.44917030177053], [-101.83153513629983, 40.69915584785451], [-101.92866481991369, 40.94255094287678], [-102.05542166453387, 41.17694451764292], [-102.2108019722499, 41.399992616779066], [-102.39348196406793, 41.609444060463176], [-102.60182199789786, 41.803166030005244], [-102.83387585266283, 41.97916919210567], [-103.08740542096587, 42.13563193677016], [-103.35990099801201, 42.27092327482179], [-103.6486071665273, 42.38362392640003], [-103.95055406483071, 42.47254513490065], [-104.26259360005875, 42.536744763681206], [-104.58143994551864, 42.57554027643805], [-104.90371345637226, 42.58851826583087]]]);
  draw.changeMode("simple_select");
});

function showSubmitContainer() {
  document.getElementById("submit-container").style.display = "table";
  document.getElementById("pre-submit").style.display = "none";
}

function hideSubmitContainer() {
  document.getElementById("submit-container").style.display = "none";
  document.getElementById("pre-submit").style.display = "block";
}

document.getElementById("cancel-submit").addEventListener("click", hideSubmitContainer);
document.getElementById("pre-submit").addEventListener("click", showSubmitContainer);
var FIELDS = {
  'mom-center': 'entry.273983659',
  'mom-radius': 'entry.102031572',
  'chris-center': 'entry.807037936',
  'chris-radius': 'entry.1475102316',
  'haley-center': 'entry.165577067',
  'haley-radius': 'entry.1795473454',
  'devon-center': 'entry.843745481',
  'devon-radius': 'entry.1540621330',
  'doug-center': 'entry.652395115',
  'doug-radius': 'entry.88494659'
};

function submitEstimates() {
  var form = document.getElementById("submit");
  var inputs = Array.prototype.slice.call(document.getElementsByClassName("hidden-form-values"), 0);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;
      form.removeChild(input);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = draw.getAll().features[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      var person = item.id.split('-')[0];
      var center = document.createElement("input");
      center.type = "hidden";
      center.classList.add("hidden-form-values");
      center.name = FIELDS[person + "-center"];
      center.value = item.properties['center'];
      var radius = document.createElement("input");
      radius.type = "hidden";
      radius.classList.add("hidden-form-values");
      radius.name = FIELDS[person + "-radius"];
      radius.value = item.properties['radiusInKm'];
      form.append(center);
      form.append(radius);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  hideSubmitContainer();
  return true;
}

document.getElementById('submit').addEventListener('submit', submitEstimates);

function updateSelection(e) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = document.getElementsByClassName("control-element")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;
      item.classList.remove("selected");
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (e.features.length == 0) {
    return;
  }

  var person = e.features[0].id.split('-')[0];
  document.getElementById(person).classList.add("selected");
}

},{"@mapbox/mapbox-gl-draw":12,"@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css":11,"mapbox-gl":76,"mapbox-gl-draw-circle":69}],2:[function(require,module,exports){
module.exports = Extent;

function Extent(bbox) {
    if (!(this instanceof Extent)) {
        return new Extent(bbox);
    }
    this._bbox = bbox || [Infinity, Infinity, -Infinity, -Infinity];
    this._valid = !!bbox;
}

Extent.prototype.include = function(ll) {
    this._valid = true;
    this._bbox[0] = Math.min(this._bbox[0], ll[0]);
    this._bbox[1] = Math.min(this._bbox[1], ll[1]);
    this._bbox[2] = Math.max(this._bbox[2], ll[0]);
    this._bbox[3] = Math.max(this._bbox[3], ll[1]);
    return this;
};

Extent.prototype.equals = function(_) {
    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }
    return this._bbox[0] == other[0] &&
        this._bbox[1] == other[1] &&
        this._bbox[2] == other[2] &&
        this._bbox[3] == other[3];
};

Extent.prototype.center = function(_) {
    if (!this._valid) return null;
    return [
        (this._bbox[0] + this._bbox[2]) / 2,
        (this._bbox[1] + this._bbox[3]) / 2]
};

Extent.prototype.union = function(_) {
    this._valid = true;
    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }
    this._bbox[0] = Math.min(this._bbox[0], other[0]);
    this._bbox[1] = Math.min(this._bbox[1], other[1]);
    this._bbox[2] = Math.max(this._bbox[2], other[2]);
    this._bbox[3] = Math.max(this._bbox[3], other[3]);
    return this;
};

Extent.prototype.bbox = function() {
    if (!this._valid) return null;
    return this._bbox;
};

Extent.prototype.contains = function(ll) {
    if (!ll) return this._fastContains();
    if (!this._valid) return null;
    var lon = ll[0], lat = ll[1];
    return this._bbox[0] <= lon &&
        this._bbox[1] <= lat &&
        this._bbox[2] >= lon &&
        this._bbox[3] >= lat;
};

Extent.prototype.intersect = function(_) {
    if (!this._valid) return null;

    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }

    return !(
      this._bbox[0] > other[2] ||
      this._bbox[2] < other[0] ||
      this._bbox[3] < other[1] ||
      this._bbox[1] > other[3]
    );
};

Extent.prototype._fastContains = function() {
    if (!this._valid) return new Function('return null;');
    var body = 'return ' +
        this._bbox[0] + '<= ll[0] &&' +
        this._bbox[1] + '<= ll[1] &&' +
        this._bbox[2] + '>= ll[0] &&' +
        this._bbox[3] + '>= ll[1]';
    return new Function('ll', body);
};

Extent.prototype.polygon = function() {
    if (!this._valid) return null;
    return {
        type: 'Polygon',
        coordinates: [
            [
                // W, S
                [this._bbox[0], this._bbox[1]],
                // E, S
                [this._bbox[2], this._bbox[1]],
                // E, N
                [this._bbox[2], this._bbox[3]],
                // W, N
                [this._bbox[0], this._bbox[3]],
                // W, S
                [this._bbox[0], this._bbox[1]]
            ]
        ]
    };
};

},{}],3:[function(require,module,exports){
var wgs84 = require('wgs84');

module.exports.geometry = geometry;
module.exports.ring = ringArea;

function geometry(_) {
    var area = 0, i;
    switch (_.type) {
        case 'Polygon':
            return polygonArea(_.coordinates);
        case 'MultiPolygon':
            for (i = 0; i < _.coordinates.length; i++) {
                area += polygonArea(_.coordinates[i]);
            }
            return area;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
            return 0;
        case 'GeometryCollection':
            for (i = 0; i < _.geometries.length; i++) {
                area += geometry(_.geometries[i]);
            }
            return area;
    }
}

function polygonArea(coords) {
    var area = 0;
    if (coords && coords.length > 0) {
        area += Math.abs(ringArea(coords[0]));
        for (var i = 1; i < coords.length; i++) {
            area -= Math.abs(ringArea(coords[i]));
        }
    }
    return area;
}

/**
 * Calculate the approximate area of the polygon were it projected onto
 *     the earth.  Note that this area will be positive if ring is oriented
 *     clockwise, otherwise it will be negative.
 *
 * Reference:
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 *     Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 *     Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
 *
 * Returns:
 * {float} The approximate signed geodesic area of the polygon in square
 *     meters.
 */

function ringArea(coords) {
    var p1, p2, p3, lowerIndex, middleIndex, upperIndex, i,
    area = 0,
    coordsLength = coords.length;

    if (coordsLength > 2) {
        for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {// i = N-2
                lowerIndex = coordsLength - 2;
                middleIndex = coordsLength -1;
                upperIndex = 0;
            } else if (i === coordsLength - 1) {// i = N-1
                lowerIndex = coordsLength - 1;
                middleIndex = 0;
                upperIndex = 1;
            } else { // i = 0 to N-3
                lowerIndex = i;
                middleIndex = i+1;
                upperIndex = i+2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            area += ( rad(p3[0]) - rad(p1[0]) ) * Math.sin( rad(p2[1]));
        }

        area = area * wgs84.RADIUS * wgs84.RADIUS / 2;
    }

    return area;
}

function rad(_) {
    return _ * Math.PI / 180;
}
},{"wgs84":80}],4:[function(require,module,exports){
module.exports = function flatten(list) {
    return _flatten(list);

    function _flatten(list) {
        if (Array.isArray(list) && list.length &&
            typeof list[0] === 'number') {
            return [list];
        }
        return list.reduce(function (acc, item) {
            if (Array.isArray(item) && Array.isArray(item[0])) {
                return acc.concat(_flatten(item));
            } else {
                acc.push(item);
                return acc;
            }
        }, []);
    }
};

},{}],5:[function(require,module,exports){
var geojsonNormalize = require('@mapbox/geojson-normalize'),
    geojsonFlatten = require('geojson-flatten'),
    flatten = require('./flatten');

module.exports = function(_) {
    if (!_) return [];
    var normalized = geojsonFlatten(geojsonNormalize(_)),
        coordinates = [];
    normalized.features.forEach(function(feature) {
        if (!feature.geometry) return;
        coordinates = coordinates.concat(flatten(feature.geometry.coordinates));
    });
    return coordinates;
};

},{"./flatten":4,"@mapbox/geojson-normalize":7,"geojson-flatten":65}],6:[function(require,module,exports){
var geojsonCoords = require('@mapbox/geojson-coords'),
    traverse = require('traverse'),
    extent = require('@mapbox/extent');

var geojsonTypesByDataAttributes = {
    features: ['FeatureCollection'],
    coordinates: ['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'],
    geometry: ['Feature'],
    geometries: ['GeometryCollection']
}

var dataAttributes = Object.keys(geojsonTypesByDataAttributes);

module.exports = function(_) {
    return getExtent(_).bbox();
};

module.exports.polygon = function(_) {
    return getExtent(_).polygon();
};

module.exports.bboxify = function(_) {
    return traverse(_).map(function(value) {
        if (!value) return ;

        var isValid = dataAttributes.some(function(attribute){
            if(value[attribute]) {
                return geojsonTypesByDataAttributes[attribute].indexOf(value.type) !== -1;
            }
            return false;
        });

        if(isValid){
            value.bbox = getExtent(value).bbox();
            this.update(value);
        }

    });
};

function getExtent(_) {
    var bbox = [Infinity, Infinity, -Infinity, -Infinity],
        ext = extent(),
        coords = geojsonCoords(_);
    for (var i = 0; i < coords.length; i++) ext.include(coords[i]);
    return ext;
}

},{"@mapbox/extent":2,"@mapbox/geojson-coords":5,"traverse":79}],7:[function(require,module,exports){
module.exports = normalize;

var types = {
    Point: 'geometry',
    MultiPoint: 'geometry',
    LineString: 'geometry',
    MultiLineString: 'geometry',
    Polygon: 'geometry',
    MultiPolygon: 'geometry',
    GeometryCollection: 'geometry',
    Feature: 'feature',
    FeatureCollection: 'featurecollection'
};

/**
 * Normalize a GeoJSON feature into a FeatureCollection.
 *
 * @param {object} gj geojson data
 * @returns {object} normalized geojson data
 */
function normalize(gj) {
    if (!gj || !gj.type) return null;
    var type = types[gj.type];
    if (!type) return null;

    if (type === 'geometry') {
        return {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                properties: {},
                geometry: gj
            }]
        };
    } else if (type === 'feature') {
        return {
            type: 'FeatureCollection',
            features: [gj]
        };
    } else if (type === 'featurecollection') {
        return gj;
    }
}

},{}],8:[function(require,module,exports){
var jsonlint = require('jsonlint-lines'),
  geojsonHintObject = require('./object');

/**
 * @alias geojsonhint
 * @param {(string|object)} GeoJSON given as a string or as an object
 * @param {Object} options
 * @param {boolean} [options.noDuplicateMembers=true] forbid repeated
 * properties. This is only available for string input, becaused parsed
 * Objects cannot have duplicate properties.
 * @param {boolean} [options.precisionWarning=true] warn if GeoJSON contains
 * unnecessary coordinate precision.
 * @returns {Array<Object>} an array of errors
 */
function hint(str, options) {

    var gj, errors = [];

    if (typeof str === 'object') {
        gj = str;
    } else if (typeof str === 'string') {
        try {
            gj = jsonlint.parse(str);
        } catch(e) {
            var match = e.message.match(/line (\d+)/);
            var lineNumber = parseInt(match[1], 10);
            return [{
                line: lineNumber - 1,
                message: e.message,
                error: e
            }];
        }
    } else {
        return [{
            message: 'Expected string or object as input',
            line: 0
        }];
    }

    errors = errors.concat(geojsonHintObject.hint(gj, options));

    return errors;
}

module.exports.hint = hint;

},{"./object":9,"jsonlint-lines":67}],9:[function(require,module,exports){
var rightHandRule = require('./rhr');

/**
 * @alias geojsonhint
 * @param {(string|object)} GeoJSON given as a string or as an object
 * @param {Object} options
 * @param {boolean} [options.noDuplicateMembers=true] forbid repeated
 * properties. This is only available for string input, becaused parsed
 * Objects cannot have duplicate properties.
 * @param {boolean} [options.precisionWarning=true] warn if GeoJSON contains
 * unnecessary coordinate precision.
 * @returns {Array<Object>} an array of errors
 */
function hint(gj, options) {

    var errors = [];
    var precisionWarningCount = 0;
    var maxPrecisionWarnings = 10;
    var maxPrecision = 6;

    function root(_) {

        if ((!options || options.noDuplicateMembers !== false) &&
           _.__duplicateProperties__) {
            errors.push({
                message: 'An object contained duplicate members, making parsing ambigous: ' + _.__duplicateProperties__.join(', '),
                line: _.__line__
            });
        }

        if (requiredProperty(_, 'type', 'string')) {
            return;
        }

        if (!types[_.type]) {
            var expectedType = typesLower[_.type.toLowerCase()];
            if (expectedType !== undefined) {
                errors.push({
                    message: 'Expected ' + expectedType + ' but got ' + _.type + ' (case sensitive)',
                    line: _.__line__
                });
            } else {
                errors.push({
                    message: 'The type ' + _.type + ' is unknown',
                    line: _.__line__
                });
            }
        } else if (_) {
            types[_.type](_);
        }
    }

    function everyIs(_, type) {
        // make a single exception because typeof null === 'object'
        return _.every(function(x) {
            return x !== null && typeof x === type;
        });
    }

    function requiredProperty(_, name, type) {
        if (typeof _[name] === 'undefined') {
            return errors.push({
                message: '"' + name + '" member required',
                line: _.__line__
            });
        } else if (type === 'array') {
            if (!Array.isArray(_[name])) {
                return errors.push({
                    message: '"' + name +
                        '" member should be an array, but is an ' +
                        (typeof _[name]) + ' instead',
                    line: _.__line__
                });
            }
        } else if (type === 'object' && _[name] && _[name].constructor !== Object) {
            return errors.push({
                message: '"' + name +
                    '" member should be ' + (type) +
                    ', but is an ' + (_[name].constructor.name) + ' instead',
                line: _.__line__
            });
        } else if (type && typeof _[name] !== type) {
            return errors.push({
                message: '"' + name +
                    '" member should be ' + (type) +
                    ', but is an ' + (typeof _[name]) + ' instead',
                line: _.__line__
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.3
    function FeatureCollection(featureCollection) {
        crs(featureCollection);
        bbox(featureCollection);
        if (featureCollection.properties !== undefined) {
            errors.push({
                message: 'FeatureCollection object cannot contain a "properties" member',
                line: featureCollection.__line__
            });
        }
        if (featureCollection.coordinates !== undefined) {
            errors.push({
                message: 'FeatureCollection object cannot contain a "coordinates" member',
                line: featureCollection.__line__
            });
        }
        if (!requiredProperty(featureCollection, 'features', 'array')) {
            if (!everyIs(featureCollection.features, 'object')) {
                return errors.push({
                    message: 'Every feature must be an object',
                    line: featureCollection.__line__
                });
            }
            featureCollection.features.forEach(Feature);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.1
    function position(_, line) {
        if (!Array.isArray(_)) {
            return errors.push({
                message: 'position should be an array, is a ' + (typeof _) +
                    ' instead',
                line: _.__line__ || line
            });
        }
        if (_.length < 2) {
            return errors.push({
                message: 'position must have 2 or more elements',
                line: _.__line__ || line
            });
        }
        if (_.length > 3) {
            return errors.push({
                message: 'position should not have more than 3 elements',
                level: 'message',
                line: _.__line__ || line
            });
        }
        if (!everyIs(_, 'number')) {
            return errors.push({
                message: 'each element in a position must be a number',
                line: _.__line__ || line
            });
        }

        if (options && options.precisionWarning) {
            if (precisionWarningCount === maxPrecisionWarnings) {
                precisionWarningCount += 1;
                return errors.push({
                    message: 'truncated warnings: we\'ve encountered coordinate precision warning ' + maxPrecisionWarnings + ' times, no more warnings will be reported',
                    level: 'message',
                    line: _.__line__ || line
                });
            } else if (precisionWarningCount < maxPrecisionWarnings) {
                _.forEach(function(num) {
                    var precision = 0;
                    var decimalStr = String(num).split('.')[1];
                    if (decimalStr !== undefined)
                        precision = decimalStr.length;
                    if (precision > maxPrecision) {
                        precisionWarningCount += 1;
                        return errors.push({
                            message: 'precision of coordinates should be reduced',
                            level: 'message',
                            line: _.__line__ || line
                        });
                    }
                });
            }
        }
    }

    function positionArray(coords, type, depth, line) {
        if (line === undefined && coords.__line__ !== undefined) {
            line = coords.__line__;
        }
        if (depth === 0) {
            return position(coords, line);
        }
        if (depth === 1 && type) {
            if (type === 'LinearRing') {
                if (!Array.isArray(coords[coords.length - 1])) {
                    errors.push({
                        message: 'a number was found where a coordinate array should have been found: this needs to be nested more deeply',
                        line: line
                    });
                    return true;
                }
                if (coords.length < 4) {
                    errors.push({
                        message: 'a LinearRing of coordinates needs to have four or more positions',
                        line: line
                    });
                }
                if (coords.length &&
                    (coords[coords.length - 1].length !== coords[0].length ||
                    !coords[coords.length - 1].every(function(pos, index) {
                        return coords[0][index] === pos;
                }))) {
                    errors.push({
                        message: 'the first and last positions in a LinearRing of coordinates must be the same',
                        line: line
                    });
                    return true;
                }
            } else if (type === 'Line' && coords.length < 2) {
                return errors.push({
                    message: 'a line needs to have two or more coordinates to be valid',
                    line: line
                });
            }
        }
        if (!Array.isArray(coords)) {
            errors.push({
                message: 'a number was found where a coordinate array should have been found: this needs to be nested more deeply',
                line: line
            });
        } else {
            var results = coords.map(function(c) {
                return positionArray(c, type, depth - 1, c.__line__ || line);
            });
            return results.some(function(r) {
                return r;
            });
        }
    }

    function crs(_) {
        if (!_.crs) return;
        var defaultCRSName = 'urn:ogc:def:crs:OGC:1.3:CRS84';
        if (typeof _.crs === 'object' && _.crs.properties && _.crs.properties.name === defaultCRSName) {
            errors.push({
                message: 'old-style crs member is not recommended, this object is equivalent to the default and should be removed',
                line: _.__line__
            });
        } else {
            errors.push({
                message: 'old-style crs member is not recommended',
                line: _.__line__
            });
        }
    }

    function bbox(_) {
        if (!_.bbox) {
            return;
        }
        if (Array.isArray(_.bbox)) {
            if (!everyIs(_.bbox, 'number')) {
                errors.push({
                    message: 'each element in a bbox member must be a number',
                    line: _.bbox.__line__
                });
            }
            if (!(_.bbox.length === 4 || _.bbox.length === 6)) {
                errors.push({
                    message: 'bbox must contain 4 elements (for 2D) or 6 elements (for 3D)',
                    line: _.bbox.__line__
                });
            }
            return errors.length;
        }
        errors.push({
            message: 'bbox member must be an array of numbers, but is a ' + (typeof _.bbox),
            line: _.__line__
        });
    }

    function geometrySemantics(geom) {
        if (geom.properties !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "properties" member',
                line: geom.__line__
            });
        }
        if (geom.geometry !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "geometry" member',
                line: geom.__line__
            });
        }
        if (geom.features !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "features" member',
                line: geom.__line__
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.2
    function Point(point) {
        crs(point);
        bbox(point);
        geometrySemantics(point);
        if (!requiredProperty(point, 'coordinates', 'array')) {
            position(point.coordinates);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.6
    function Polygon(polygon) {
        crs(polygon);
        bbox(polygon);
        if (!requiredProperty(polygon, 'coordinates', 'array')) {
            if (!positionArray(polygon.coordinates, 'LinearRing', 2)) {
                rightHandRule(polygon, errors);
            }
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.7
    function MultiPolygon(multiPolygon) {
        crs(multiPolygon);
        bbox(multiPolygon);
        if (!requiredProperty(multiPolygon, 'coordinates', 'array')) {
            if (!positionArray(multiPolygon.coordinates, 'LinearRing', 3)) {
                rightHandRule(multiPolygon, errors);
            }
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.4
    function LineString(lineString) {
        crs(lineString);
        bbox(lineString);
        if (!requiredProperty(lineString, 'coordinates', 'array')) {
            positionArray(lineString.coordinates, 'Line', 1);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.5
    function MultiLineString(multiLineString) {
        crs(multiLineString);
        bbox(multiLineString);
        if (!requiredProperty(multiLineString, 'coordinates', 'array')) {
            positionArray(multiLineString.coordinates, 'Line', 2);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.3
    function MultiPoint(multiPoint) {
        crs(multiPoint);
        bbox(multiPoint);
        if (!requiredProperty(multiPoint, 'coordinates', 'array')) {
            positionArray(multiPoint.coordinates, '', 1);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.8
    function GeometryCollection(geometryCollection) {
        crs(geometryCollection);
        bbox(geometryCollection);
        if (!requiredProperty(geometryCollection, 'geometries', 'array')) {
            if (!everyIs(geometryCollection.geometries, 'object')) {
                errors.push({
                    message: 'The geometries array in a GeometryCollection must contain only geometry objects',
                    line: geometryCollection.__line__
                });
            }
            if (geometryCollection.geometries.length === 1) {
                errors.push({
                    message: 'GeometryCollection with a single geometry should be avoided in favor of single part or a single object of multi-part type',
                    line: geometryCollection.geometries.__line__
                });
            }
            geometryCollection.geometries.forEach(function(geometry) {
                if (geometry) {
                    if (geometry.type === 'GeometryCollection') {
                        errors.push({
                            message: 'GeometryCollection should avoid nested geometry collections',
                            line: geometryCollection.geometries.__line__
                        });
                    }
                    root(geometry);
                }
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.2
    function Feature(feature) {
        crs(feature);
        bbox(feature);
        // https://github.com/geojson/draft-geojson/blob/master/middle.mkd#feature-object
        if (feature.id !== undefined &&
            typeof feature.id !== 'string' &&
            typeof feature.id !== 'number') {
            errors.push({
                message: 'Feature "id" member must have a string or number value',
                line: feature.__line__
            });
        }
        if (feature.features !== undefined) {
            errors.push({
                message: 'Feature object cannot contain a "features" member',
                line: feature.__line__
            });
        }
        if (feature.coordinates !== undefined) {
            errors.push({
                message: 'Feature object cannot contain a "coordinates" member',
                line: feature.__line__
            });
        }
        if (feature.type !== 'Feature') {
            errors.push({
                message: 'GeoJSON features must have a type=feature member',
                line: feature.__line__
            });
        }
        requiredProperty(feature, 'properties', 'object');
        if (!requiredProperty(feature, 'geometry', 'object')) {
            // https://tools.ietf.org/html/rfc7946#section-3.2
            // tolerate null geometry
            if (feature.geometry) root(feature.geometry);
        }
    }

    var types = {
        Point: Point,
        Feature: Feature,
        MultiPoint: MultiPoint,
        LineString: LineString,
        MultiLineString: MultiLineString,
        FeatureCollection: FeatureCollection,
        GeometryCollection: GeometryCollection,
        Polygon: Polygon,
        MultiPolygon: MultiPolygon
    };

    var typesLower = Object.keys(types).reduce(function(prev, curr) {
        prev[curr.toLowerCase()] = curr;
        return prev;
    }, {});

    if (typeof gj !== 'object' ||
        gj === null ||
        gj === undefined) {
        errors.push({
            message: 'The root of a GeoJSON object must be an object.',
            line: 0
        });
        return errors;
    }

    root(gj);

    errors.forEach(function(err) {
        if ({}.hasOwnProperty.call(err, 'line') && err.line === undefined) {
            delete err.line;
        }
    });

    return errors;
}

module.exports.hint = hint;

},{"./rhr":10}],10:[function(require,module,exports){
function rad(x) {
    return x * Math.PI / 180;
}

function isRingClockwise (coords) {
    var area = 0;
    if (coords.length > 2) {
        var p1, p2;
        for (var i = 0; i < coords.length - 1; i++) {
            p1 = coords[i];
            p2 = coords[i + 1];
            area += rad(p2[0] - p1[0]) * (2 + Math.sin(rad(p1[1])) + Math.sin(rad(p2[1])));
        }
    }

    return area >= 0;
}

function isPolyRHR (coords) {
    if (coords && coords.length > 0) {
        if (isRingClockwise(coords[0]))
            return false;
        var interiorCoords = coords.slice(1, coords.length);
        if (!interiorCoords.every(isRingClockwise))
            return false;
    }
    return true;
}

function rightHandRule (geometry) {
    if (geometry.type === 'Polygon') {
        return isPolyRHR(geometry.coordinates);
    } else if (geometry.type === 'MultiPolygon') {
        return geometry.coordinates.every(isPolyRHR);
    }
}

module.exports = function validateRightHandRule(geometry, errors) {
    if (!rightHandRule(geometry)) {
        errors.push({
            message: 'Polygons and MultiPolygons should follow the right-hand rule',
            level: 'message',
            line: geometry.__line__
        });
    }
};

},{}],11:[function(require,module,exports){
var css = "/* Override default control style */\n.mapbox-gl-draw_ctrl-bottom-left,\n.mapbox-gl-draw_ctrl-top-left {\n  margin-left: 0;\n  border-radius: 0 4px 4px 0;\n}\n.mapbox-gl-draw_ctrl-top-right,\n.mapbox-gl-draw_ctrl-bottom-right {\n  margin-right: 0;\n  border-radius: 4px 0 0 4px;\n}\n.mapbox-gl-draw_ctrl-draw {\n  background-color: rgba(0,0,0,0.75);\n  border-color: rgba(0,0,0,0.9);\n}\n.mapbox-gl-draw_ctrl-draw > button {\n  border-color: rgba(0,0,0,0.9);\n  color: rgba(255,255,255,0.5);\n  width: 30px;\n  height: 30px;\n}\n.mapbox-gl-draw_ctrl-draw > button:hover {\n  background-color: rgba(0,0,0,0.85);\n  color: rgba(255,255,255,0.75);\n}\n.mapbox-gl-draw_ctrl-draw > button.active,\n.mapbox-gl-draw_ctrl-draw > button.active:hover {\n  background-color: rgba(0,0,0,0.95);\n  color: #fff;\n}\n.mapbox-gl-draw_ctrl-draw-btn {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.mapbox-gl-draw_point {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJtYXJrZXIuc3ZnIj4gIDxkZWZzICAgICBpZD0iZGVmczE5MTY5IiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMTYiICAgICBpbmtzY2FwZTpjeD0iMTQuMTY0MjUzIiAgICAgaW5rc2NhcGU6Y3k9IjguODg1NzIiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0iZmFsc2UiICAgICB1bml0cz0icHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3NTEiICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjA4IiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE5MCIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiICAgICBpbmtzY2FwZTpvYmplY3Qtbm9kZXM9InRydWUiPiAgICA8aW5rc2NhcGU6Z3JpZCAgICAgICB0eXBlPSJ4eWdyaWQiICAgICAgIGlkPSJncmlkMTk3MTUiIC8+ICA8L3NvZGlwb2RpOm5hbWVkdmlldz4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhMTkxNzIiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEwMzIuMzYyMikiPiAgICA8cGF0aCAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgICAgICAgZD0ibSAzNiwxMDQwLjM2MjIgYyA2ZS02LDMuMzA5MyAtNS45ODg2MTIsMTAgLTUuOTg4NjEyLDEwIDAsMCAtNS45OTg3NzYsLTYuNjY4IC02LjAxMTM0NSwtOS45NzcyIC0wLjAxMjU3LC0zLjMwOTIgMi42NTY1NzYsLTYuMDAzOSA1Ljk2NTc5MiwtNi4wMjI3IDMuMzA5MTg5LC0wLjAxOSA2LjAwODg0LDIuNjQ1MiA2LjAzMzk5Miw1Ljk1NDMiICAgICAgIGlkPSJwYXRoMTI1NjEiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2Nzc2MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDM0LjAwMDExNSwxMDQwLjM2MjIgYyAtNWUtNiwyLjIwNjIgLTMuOTkyNTIzLDcuMDAwMSAtMy45OTI1MjMsNy4wMDAxIDAsMCAtMy45OTkyOTEsLTQuNzc4NyAtNC4wMDc2NzksLTYuOTg0OSAtMC4wMDg0LC0yLjIwNjIgMS43NzEwODIsLTQuMDAyNyAzLjk3NzMxLC00LjAxNTMgMi4yMDYyMSwtMC4wMTMgNC4wMDYwMzcsMS43NjM1IDQuMDIyNzc3LDMuOTY5NyIgICAgICAgaWQ9InBhdGgxMjU2MyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NzYyIgLz4gICAgPHBhdGggICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGQ9Ik0gOS45NjY3OTY5LDEwMTQuMzYyMiBDIDYuNjU3NTgwOSwxMDE0LjM4MSAzLjk4NzQzLDEwMTcuMDc2NCA0LDEwMjAuMzg1NiBjIDAuMDEyNTY5LDMuMzA5MiA2LjAxMTcxOSw4Ljk3NjYgNi4wMTE3MTksOC45NzY2IDAsMCA1Ljk4ODI4NywtNS42OTA3IDUuOTg4MjgxLC05IGwgMCwtMC4wNDUgYyAtMC4wMjUxNSwtMy4zMDkxIC0yLjcyNDAxNCwtNS45NzQxIC02LjAzMzIwMzEsLTUuOTU1MSB6IG0gMC4wMDk3NywyIGMgMi4yMDYyMDYxLC0wLjAxMyA0LjAwNjY5MzEsMS43NjI2IDQuMDIzNDMzMSwzLjk2ODggbCAwLDAuMDMxIGMgLTVlLTYsMi4yMDYyIC0zLjk5MjE4OCw2IC0zLjk5MjE4OCw2IDAsMCAtMy45OTk0MjQsLTMuNzc4MiAtNC4wMDc4MTIsLTUuOTg0NCAtMC4wMDg0LC0yLjIwNjIgMS43NzAzMzQ1LC00LjAwMyAzLjk3NjU2MjUsLTQuMDE1NiB6IiAgICAgICBpZD0icGF0aDEyNTY4IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNzY3NjY2Njc2NzYyIgLz4gICAgPHBhdGggICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46YmV2ZWw7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lIiAgICAgICBkPSJNIDEwIDIgQyA2LjY4NjI5MiAyIDQgNC42ODYzIDQgOCBDIDQgMTEuMzEzNyAxMCAxNyAxMCAxNyBDIDEwIDE3IDE2IDExLjMxMzcgMTYgOCBDIDE2IDQuNjg2MyAxMy4zMTM3MDggMiAxMCAyIHogTSAxMCA0IEMgMTIuMDcxMDY4IDQgMTMuNzUgNS42Nzg5IDEzLjc1IDcuNzUgQyAxMy43NSA5LjIwNTMyNzggMTEuOTMxMTEgMTEuNjQ0MzkzIDEwLjgzMDA3OCAxMyBMIDkuMTY5OTIxOSAxMyBDIDguMDY4ODkwMyAxMS42NDQzOTMgNi4yNSA5LjIwNTMyNzggNi4yNSA3Ljc1IEMgNi4yNSA1LjY3ODkgNy45Mjg5MzIgNCAxMCA0IHogIiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEwMzIuMzYyMikiICAgICAgIGlkPSJwYXRoMTczMDUiIC8+ICA8L2c+PC9zdmc+);\n}\n.mapbox-gl-draw_polygon {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJzcXVhcmUuc3ZnIj4gIDxkZWZzICAgICBpZD0iZGVmczE5MTY5IiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMzEzNzA4IiAgICAgaW5rc2NhcGU6Y3g9IjExLjY4MTYzNCIgICAgIGlua3NjYXBlOmN5PSI5LjI4NTcxNDMiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIHVuaXRzPSJweCIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIwIiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQxOTcxNSIgLz4gIDwvc29kaXBvZGk6bmFtZWR2aWV3PiAgPG1ldGFkYXRhICAgICBpZD0ibWV0YWRhdGExOTE3MiI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41O21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGQ9Im0gNSwxMDM5LjM2MjIgMCw2IDIsMiA2LDAgMiwtMiAwLC02IC0yLC0yIC02LDAgeiBtIDMsMCA0LDAgMSwxIDAsNCAtMSwxIC00LDAgLTEsLTEgMCwtNCB6IiAgICAgICBpZD0icmVjdDc3OTciICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjY2NjY2NjIiAvPiAgICA8Y2lyY2xlICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS42MDAwMDAwMjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBpZD0icGF0aDQzNjQiICAgICAgIGN4PSI2IiAgICAgICBjeT0iMTA0Ni4zNjIyIiAgICAgICByPSIyIiAvPiAgICA8Y2lyY2xlICAgICAgIGlkPSJwYXRoNDM2OCIgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjYwMDAwMDAyO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGN4PSIxNCIgICAgICAgY3k9IjEwNDYuMzYyMiIgICAgICAgcj0iMiIgLz4gICAgPGNpcmNsZSAgICAgICBpZD0icGF0aDQzNzAiICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS42MDAwMDAwMjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBjeD0iNiIgICAgICAgY3k9IjEwMzguMzYyMiIgICAgICAgcj0iMiIgLz4gICAgPGNpcmNsZSAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNjAwMDAwMDI7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgICAgICAgaWQ9InBhdGg0MzcyIiAgICAgICBjeD0iMTQiICAgICAgIGN5PSIxMDM4LjM2MjIiICAgICAgIHI9IjIiIC8+ICA8L2c+PC9zdmc+);\n}\n.mapbox-gl-draw_line {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJsaW5lLnN2ZyI+ICA8ZGVmcyAgICAgaWQ9ImRlZnMxOTE2OSIgLz4gIDxzb2RpcG9kaTpuYW1lZHZpZXcgICAgIGlkPSJiYXNlIiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgICBib3JkZXJvcGFjaXR5PSIxLjAiICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgICAgIGlua3NjYXBlOnpvb209IjE2IiAgICAgaW5rc2NhcGU6Y3g9IjEyLjg5ODc3NSIgICAgIGlua3NjYXBlOmN5PSI5LjU4OTAxNTIiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIHVuaXRzPSJweCIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIwIiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQxOTcxNSIgLz4gIDwvc29kaXBvZGk6bmFtZWR2aWV3PiAgPG1ldGFkYXRhICAgICBpZD0ibWV0YWRhdGExOTE3MiI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDEzLjUsMTAzNS44NjIyIGMgLTEuMzgwNzEyLDAgLTIuNSwxLjExOTMgLTIuNSwyLjUgMCwwLjMyMDggMC4wNDYxNCwwLjYyNDQgMC4xNTYyNSwwLjkwNjMgbCAtMy43NSwzLjc1IGMgLTAuMjgxODM2LC0wLjExMDIgLTAuNTg1NDIxLC0wLjE1NjMgLTAuOTA2MjUsLTAuMTU2MyAtMS4zODA3MTIsMCAtMi41LDEuMTE5MyAtMi41LDIuNSAwLDEuMzgwNyAxLjExOTI4OCwyLjUgMi41LDIuNSAxLjM4MDcxMiwwIDIuNSwtMS4xMTkzIDIuNSwtMi41IDAsLTAuMzIwOCAtMC4wNDYxNCwtMC42MjQ0IC0wLjE1NjI1LC0wLjkwNjIgbCAzLjc1LC0zLjc1IGMgMC4yODE4MzYsMC4xMTAxIDAuNTg1NDIxLDAuMTU2MiAwLjkwNjI1LDAuMTU2MiAxLjM4MDcxMiwwIDIuNSwtMS4xMTkzIDIuNSwtMi41IDAsLTEuMzgwNyAtMS4xMTkyODgsLTIuNSAtMi41LC0yLjUgeiIgICAgICAgaWQ9InJlY3Q2NDY3IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPiAgPC9nPjwvc3ZnPg==);\n}\n.mapbox-gl-draw_trash {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgaWQ9InN2ZzU3MzgiICAgdmVyc2lvbj0iMS4xIiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTErZGV2ZWwrb3N4bWVudSByMTI5MTEiICAgc29kaXBvZGk6ZG9jbmFtZT0idHJhc2guc3ZnIiAgIHZpZXdCb3g9IjAgMCAyMCAyMCI+ICA8ZGVmcyAgICAgaWQ9ImRlZnM1NzQwIiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMjIuNjI3NDE3IiAgICAgaW5rc2NhcGU6Y3g9IjEyLjEyODE4NCIgICAgIGlua3NjYXBlOmN5PSI4Ljg0NjEzMDciICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTAzMyIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIyMCIgICAgIGlua3NjYXBlOndpbmRvdy15PSIyMyIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiICAgICBpbmtzY2FwZTpzbmFwLXNtb290aC1ub2Rlcz0idHJ1ZSIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQ1NzQ2IiAgICAgICBlbXBzcGFjaW5nPSI1IiAgICAgICB2aXNpYmxlPSJ0cnVlIiAgICAgICBlbmFibGVkPSJ0cnVlIiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiIC8+ICA8L3NvZGlwb2RpOm5hbWVkdmlldz4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhNTc0MyI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk4MjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDEwLDEwMzUuNzc0MyBjIC0wLjc4NDkyNTMsOGUtNCAtMS40OTY4Mzc2LDAuNDYwNiAtMS44MjAzMTI1LDEuMTc1OCBsIC0zLjE3OTY4NzUsMCAtMSwxIDAsMSAxMiwwIDAsLTEgLTEsLTEgLTMuMTc5Njg4LDAgYyAtMC4zMjM0NzUsLTAuNzE1MiAtMS4wMzUzODcsLTEuMTc1IC0xLjgyMDMxMiwtMS4xNzU4IHogbSAtNSw0LjU4NzkgMCw3IGMgMCwxIDEsMiAyLDIgbCA2LDAgYyAxLDAgMiwtMSAyLC0yIGwgMCwtNyAtMiwwIDAsNS41IC0xLjUsMCAwLC01LjUgLTMsMCAwLDUuNSAtMS41LDAgMCwtNS41IHoiICAgICAgIGlkPSJyZWN0MjQzOS03IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2MiIC8+ICA8L2c+PC9zdmc+);\n}\n.mapbox-gl-draw_uncombine {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICBpZD0ic3ZnNTczOCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idW5jb21iaW5lLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczU3NDAiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0MTAzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDE4NCIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgeDE9IjMwMDMiCiAgICAgICB5MT0iMTAiCiAgICAgICB4Mj0iMzAxNyIKICAgICAgIHkyPSIxMCIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSwyLjYxNzE4NzRlLTYpIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0MTAzIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0MTA1IiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eTowOyIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQxMDciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMzEzNzA4IgogICAgIGlua3NjYXBlOmN4PSItMTAuMjczOTQ2IgogICAgIGlua3NjYXBlOmN5PSI2LjkzMDM0NCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjIwNzgiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iOTAwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOTYiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpvYmplY3Qtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1zbW9vdGgtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1vdGhlcnM9ImZhbHNlIgogICAgIGlua3NjYXBlOnNuYXAtbm9kZXM9ImZhbHNlIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDU3NDYiCiAgICAgICBlbXBzcGFjaW5nPSIyIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMC41cHgiCiAgICAgICBzcGFjaW5neT0iMC41cHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIG9wYWNpdHk9IjAuMDU4ODIzNTMiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTc0MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIKICAgICAgIGQ9Ik0gMTIuMDA1ODU5IDIgQyAxMS43NTAzNiAyIDExLjQ5NDYwNSAyLjA5NzE4NyAxMS4yOTg4MjggMi4yOTI5Njg4IEwgMTAuMzAyNzM0IDMuMjg5MDYyNSBDIDkuOTExMTgwNCAzLjY4MDYyNiA5LjkxMTE4MDQgNC4zMTE1NjE1IDEwLjMwMjczNCA0LjcwMzEyNSBMIDExLjMwMjczNCA1LjcwMTE3MTkgQyAxMS42OTQyODggNi4wOTI3MzU0IDEyLjMyMzI5IDYuMDkyNzM1NCAxMi43MTQ4NDQgNS43MDExNzE5IEwgMTMuNzEwOTM4IDQuNzA1MDc4MSBDIDE0LjEwMjQ5MSA0LjMxMzUxNDYgMTQuMTAyNDkxIDMuNjgyNTc5MSAxMy43MTA5MzggMy4yOTEwMTU2IEwgMTIuNzEyODkxIDIuMjkyOTY4OCBDIDEyLjUxNzExNCAyLjA5NzE4NyAxMi4yNjEzNTkgMiAxMi4wMDU4NTkgMiB6IE0gMTYuMDAxOTUzIDUuOTk0MTQwNiBDIDE1Ljc0NjQ2MyA1Ljk5NDE0MDYgMTUuNDkwNjkyIDYuMDkzMjczNSAxNS4yOTQ5MjIgNi4yODkwNjI1IEwgMTQuMjk4ODI4IDcuMjg1MTU2MiBDIDEzLjkwNzI4OSA3LjY3NjczNDIgMTMuOTA3Mjg5IDguMzA1Njg3NyAxNC4yOTg4MjggOC42OTcyNjU2IEwgMTUuMjk2ODc1IDkuNjk3MjY1NiBDIDE1LjY4ODQxNCAxMC4wODg4NDQgMTYuMzE5Mzk4IDEwLjA4ODg0NCAxNi43MTA5MzggOS42OTcyNjU2IEwgMTcuNzA3MDMxIDguNzAxMTcxOSBDIDE4LjA5ODU3MSA4LjMwOTU5MzkgMTguMDk4NTcxIDcuNjc4Njg3MyAxNy43MDcwMzEgNy4yODcxMDk0IEwgMTYuNzA4OTg0IDYuMjg5MDYyNSBDIDE2LjUxMzIxNSA2LjA5MzI3MzUgMTYuMjU3NDQzIDUuOTk0MTQwNiAxNi4wMDE5NTMgNS45OTQxNDA2IHogTSA5IDcgQyA4IDcgOCA4IDguNSA4LjUgQyA4LjgzMzMzMyA4LjgzMzMgOS41IDkuNSA5LjUgOS41IEwgOC41IDEwLjUgQyA4LjUgMTAuNSA4IDExIDguNSAxMS41IEMgOSAxMiA5LjUgMTEuNSA5LjUgMTEuNSBMIDEwLjUgMTAuNSBMIDExLjUgMTEuNSBDIDEyIDEyIDEzIDEyIDEzIDExIEwgMTMgNyBMIDkgNyB6IE0gNC4wNDg4MjgxIDEwLjAwMTk1MyBDIDMuNzkzMzA4NyAxMC4wMDE5NTMgMy41Mzc1ODkxIDEwLjA5OTEyOSAzLjM0MTc5NjkgMTAuMjk0OTIyIEwgMi4yOTg4MjgxIDExLjMzNzg5MSBDIDEuOTA3MjQzNyAxMS43Mjk0NzYgMS45MDcyNDM3IDEyLjM2MDM2OCAyLjI5ODgyODEgMTIuNzUxOTUzIEwgNy4yNDgwNDY5IDE3LjcwMTE3MiBDIDcuNjM5NjMxMyAxOC4wOTI3NTcgOC4yNzA1MjUgMTguMDkyNzU3IDguNjYyMTA5NCAxNy43MDExNzIgTCA5LjcwNTA3ODEgMTYuNjU4MjAzIEMgMTAuMDk2NjYzIDE2LjI2NjYxOCAxMC4wOTY2NjMgMTUuNjM1NzI2IDkuNzA1MDc4MSAxNS4yNDQxNDEgTCA0Ljc1NTg1OTQgMTAuMjk0OTIyIEMgNC41NjAwNjcyIDEwLjA5OTEyOSA0LjMwNDM0NzUgMTAuMDAxOTUzIDQuMDQ4ODI4MSAxMC4wMDE5NTMgeiAiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEwMzIuMzYyMikiCiAgICAgICBpZD0icmVjdDkxOTgiIC8+CiAgPC9nPgo8L3N2Zz4K);\n}\n.mapbox-gl-draw_combine {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICBpZD0ic3ZnNTczOCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iY29tYmluZS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NzQwIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDEwMyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQxODQiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHgxPSIzMDAzIgogICAgICAgeTE9IjEwIgogICAgICAgeDI9IjMwMTciCiAgICAgICB5Mj0iMTAiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMi42MTcxODc0ZS02KSIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDEwMyI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDEwNSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MDsiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0MTA3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjE2IgogICAgIGlua3NjYXBlOmN4PSIyLjQyMzAwNiIKICAgICBpbmtzY2FwZTpjeT0iMTIuMTczMTY1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMjA3OCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI5MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIHNob3dndWlkZXM9ImZhbHNlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOmJib3gtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6b2JqZWN0LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLXNtb290aC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLW90aGVycz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6c25hcC1ub2Rlcz0iZmFsc2UiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNTc0NiIKICAgICAgIGVtcHNwYWNpbmc9IjIiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIKICAgICAgIHNwYWNpbmd4PSIwLjVweCIKICAgICAgIHNwYWNpbmd5PSIwLjVweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4wNTg4MjM1MyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1NzQzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDMyLjM2MjIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAxMi4wNTA3ODEgMiBDIDExLjc5NTI2MiAyIDExLjUzOTU0MiAyLjA5NzE3NjIgMTEuMzQzNzUgMi4yOTI5Njg4IEwgMTAuMjk4ODI4IDMuMzM3ODkwNiBDIDkuOTA3MjQzNyAzLjcyOTQ3NTcgOS45MDcyNDM3IDQuMzYwMzY4IDEwLjI5ODgyOCA0Ljc1MTk1MzEgTCAxNS4yNDgwNDcgOS43MDExNzE5IEMgMTUuNjM5NjMxIDEwLjA5Mjc1NyAxNi4yNzA1MjUgMTAuMDkyNzU3IDE2LjY2MjEwOSA5LjcwMTE3MTkgTCAxNy43MDcwMzEgOC42NTYyNSBDIDE4LjA5ODYxNiA4LjI2NDY2NDkgMTguMDk4NjE2IDcuNjMzNzcyNiAxNy43MDcwMzEgNy4yNDIxODc1IEwgMTIuNzU3ODEyIDIuMjkyOTY4OCBDIDEyLjU2MjAyIDIuMDk3MTc2MiAxMi4zMDYzMDEgMiAxMi4wNTA3ODEgMiB6IE0gOCA4IEMgNyA4IDcgOSA3LjUgOS41IEMgNy44MzMzMzMgOS44MzMzIDguNSAxMC41IDguNSAxMC41IEwgNy41IDExLjUgQyA3LjUgMTEuNSA3IDEyIDcuNSAxMi41IEMgOCAxMyA4LjUgMTIuNSA4LjUgMTIuNSBMIDkuNSAxMS41IEwgMTAuNSAxMi41IEMgMTEgMTMgMTIgMTMgMTIgMTIgTCAxMiA4IEwgOCA4IHogTSA0IDEwLjAwMzkwNiBDIDMuNzQ0NTEgMTAuMDAzOTA2IDMuNDkwNjkxNiAxMC4xMDMwMzkgMy4yOTQ5MjE5IDEwLjI5ODgyOCBMIDIuMjk4ODI4MSAxMS4yOTQ5MjIgQyAxLjkwNzI4ODggMTEuNjg2NSAxLjkwNzI4ODggMTIuMzE1NDUzIDIuMjk4ODI4MSAxMi43MDcwMzEgTCAzLjI5Njg3NSAxMy43MDcwMzEgQyAzLjY4ODQxNDQgMTQuMDk4NjA5IDQuMzE5Mzk4MSAxNC4wOTg2MDkgNC43MTA5Mzc1IDEzLjcwNzAzMSBMIDUuNzA3MDMxMiAxMi43MTA5MzggQyA2LjA5ODU3MDYgMTIuMzE5MzYgNi4wOTg1NzA2IDExLjY4ODQ1MyA1LjcwNzAzMTIgMTEuMjk2ODc1IEwgNC43MDcwMzEyIDEwLjI5ODgyOCBDIDQuNTExMjYxNiAxMC4xMDMwMzkgNC4yNTU0OSAxMC4wMDM5MDYgNCAxMC4wMDM5MDYgeiBNIDcuOTk2MDkzOCAxNCBDIDcuNzQwNTk0MiAxNCA3LjQ4NDgzOTUgMTQuMDk3MTg3IDcuMjg5MDYyNSAxNC4yOTI5NjkgTCA2LjI5NDkyMTkgMTUuMjg5MDYyIEMgNS45MDMzNjc5IDE1LjY4MDYyNiA1LjkwMzM2NzkgMTYuMzExNTYxIDYuMjk0OTIxOSAxNi43MDMxMjUgTCA3LjI5Mjk2ODggMTcuNzAxMTcyIEMgNy42ODQ1MjI3IDE4LjA5MjczNSA4LjMxMzUyNDIgMTguMDkyNzM1IDguNzA1MDc4MSAxNy43MDExNzIgTCA5LjcwMTE3MTkgMTYuNzA1MDc4IEMgMTAuMDkyNzI2IDE2LjMxMzUxNSAxMC4wOTI3MjYgMTUuNjg0NTMyIDkuNzAxMTcxOSAxNS4yOTI5NjkgTCA4LjcwMzEyNSAxNC4yOTI5NjkgQyA4LjUwNzM0OCAxNC4wOTcxODcgOC4yNTE1OTMzIDE0IDcuOTk2MDkzOCAxNCB6ICIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAzMi4zNjIyKSIKICAgICAgIGlkPSJyZWN0OTE5OCIgLz4KICA8L2c+Cjwvc3ZnPgo=);\n}\n.mapboxgl-map.mouse-pointer .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: pointer;\n}\n.mapboxgl-map.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mouse-add .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: crosshair;\n}\n.mapboxgl-map.mouse-move.mode-direct_select .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.mapboxgl-map.mode-direct_select.feature-vertex.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mode-direct_select.feature-midpoint.mouse-pointer .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: cell;\n}\n.mapboxgl-map.mode-direct_select.feature-feature.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mode-static.mouse-pointer  .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.mapbox-gl-draw_boxselect {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  background: rgba(0,0,0,.1);\n  border: 2px dotted #fff;\n  opacity: 0.5;\n}\n"; (require("browserify-css").createStyle(css, { "href": "node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":63}],12:[function(require,module,exports){
const runSetup = require('./src/setup');

const setupOptions = require('./src/options');

const setupAPI = require('./src/api');

const Constants = require('./src/constants');

const setupDraw = function (options, api) {
  options = setupOptions(options);
  const ctx = {
    options: options
  };
  api = setupAPI(ctx, api);
  ctx.api = api;
  const setup = runSetup(ctx);
  api.onAdd = setup.onAdd;
  api.onRemove = setup.onRemove;
  api.types = Constants.types;
  api.options = options;
  return api;
};

module.exports = function (options) {
  setupDraw(options, this);
};

module.exports.modes = require('./src/modes');

},{"./src/api":13,"./src/constants":14,"./src/modes":47,"./src/options":52,"./src/setup":54}],13:[function(require,module,exports){
const isEqual = require('lodash.isequal');

const normalize = require('@mapbox/geojson-normalize');

const hat = require('hat');

const featuresAt = require('./lib/features_at');

const stringSetsAreEqual = require('./lib/string_sets_are_equal');

const geojsonhint = require('@mapbox/geojsonhint');

const Constants = require('./constants');

const StringSet = require('./lib/string_set');

const featureTypes = {
  Polygon: require('./feature_types/polygon'),
  LineString: require('./feature_types/line_string'),
  Point: require('./feature_types/point'),
  MultiPolygon: require('./feature_types/multi_feature'),
  MultiLineString: require('./feature_types/multi_feature'),
  MultiPoint: require('./feature_types/multi_feature')
};

module.exports = function (ctx, api) {
  api.modes = Constants.modes;

  api.getFeatureIdsAt = function (point) {
    const features = featuresAt.click({
      point
    }, null, ctx);
    return features.map(feature => feature.properties.id);
  };

  api.getSelectedIds = function () {
    return ctx.store.getSelectedIds();
  };

  api.getSelected = function () {
    return {
      type: Constants.geojsonTypes.FEATURE_COLLECTION,
      features: ctx.store.getSelectedIds().map(id => ctx.store.get(id)).map(feature => feature.toGeoJSON())
    };
  };

  api.getSelectedPoints = function () {
    return {
      type: Constants.geojsonTypes.FEATURE_COLLECTION,
      features: ctx.store.getSelectedCoordinates().map(coordinate => {
        return {
          type: Constants.geojsonTypes.FEATURE,
          properties: {},
          geometry: {
            type: Constants.geojsonTypes.POINT,
            coordinates: coordinate.coordinates
          }
        };
      })
    };
  };

  api.set = function (featureCollection) {
    if (featureCollection.type === undefined || featureCollection.type !== Constants.geojsonTypes.FEATURE_COLLECTION || !Array.isArray(featureCollection.features)) {
      throw new Error('Invalid FeatureCollection');
    }

    const renderBatch = ctx.store.createRenderBatch();
    let toDelete = ctx.store.getAllIds().slice();
    const newIds = api.add(featureCollection);
    const newIdsLookup = new StringSet(newIds);
    toDelete = toDelete.filter(id => !newIdsLookup.has(id));

    if (toDelete.length) {
      api.delete(toDelete);
    }

    renderBatch();
    return newIds;
  };

  api.add = function (geojson) {
    const errors = geojsonhint.hint(geojson, {
      precisionWarning: false
    }).filter(e => e.level !== 'message');

    if (errors.length) {
      throw new Error(errors[0].message);
    }

    const featureCollection = JSON.parse(JSON.stringify(normalize(geojson)));
    const ids = featureCollection.features.map(feature => {
      feature.id = feature.id || hat();

      if (feature.geometry === null) {
        throw new Error('Invalid geometry: null');
      }

      if (ctx.store.get(feature.id) === undefined || ctx.store.get(feature.id).type !== feature.geometry.type) {
        // If the feature has not yet been created ...
        const Model = featureTypes[feature.geometry.type];

        if (Model === undefined) {
          throw new Error(`Invalid geometry type: ${feature.geometry.type}.`);
        }

        const internalFeature = new Model(ctx, feature);
        ctx.store.add(internalFeature);
      } else {
        // If a feature of that id has already been created, and we are swapping it out ...
        const internalFeature = ctx.store.get(feature.id);
        internalFeature.properties = feature.properties;

        if (!isEqual(internalFeature.getCoordinates(), feature.geometry.coordinates)) {
          internalFeature.incomingCoords(feature.geometry.coordinates);
        }
      }

      return feature.id;
    });
    ctx.store.render();
    return ids;
  };

  api.get = function (id) {
    const feature = ctx.store.get(id);

    if (feature) {
      return feature.toGeoJSON();
    }
  };

  api.getAll = function () {
    return {
      type: Constants.geojsonTypes.FEATURE_COLLECTION,
      features: ctx.store.getAll().map(feature => feature.toGeoJSON())
    };
  };

  api.delete = function (featureIds) {
    ctx.store.delete(featureIds, {
      silent: true
    }); // If we were in direct select mode and our selected feature no longer exists
    // (because it was deleted), we need to get out of that mode.

    if (api.getMode() === Constants.modes.DIRECT_SELECT && !ctx.store.getSelectedIds().length) {
      ctx.events.changeMode(Constants.modes.SIMPLE_SELECT, undefined, {
        silent: true
      });
    } else {
      ctx.store.render();
    }

    return api;
  };

  api.deleteAll = function () {
    ctx.store.delete(ctx.store.getAllIds(), {
      silent: true
    }); // If we were in direct select mode, now our selected feature no longer exists,
    // so escape that mode.

    if (api.getMode() === Constants.modes.DIRECT_SELECT) {
      ctx.events.changeMode(Constants.modes.SIMPLE_SELECT, undefined, {
        silent: true
      });
    } else {
      ctx.store.render();
    }

    return api;
  };

  api.changeMode = function (mode, modeOptions = {}) {
    // Avoid changing modes just to re-select what's already selected
    if (mode === Constants.modes.SIMPLE_SELECT && api.getMode() === Constants.modes.SIMPLE_SELECT) {
      if (stringSetsAreEqual(modeOptions.featureIds || [], ctx.store.getSelectedIds())) return api; // And if we are changing the selection within simple_select mode, just change the selection,
      // instead of stopping and re-starting the mode

      ctx.store.setSelected(modeOptions.featureIds, {
        silent: true
      });
      ctx.store.render();
      return api;
    }

    if (mode === Constants.modes.DIRECT_SELECT && api.getMode() === Constants.modes.DIRECT_SELECT && modeOptions.featureId === ctx.store.getSelectedIds()[0]) {
      return api;
    }

    ctx.events.changeMode(mode, modeOptions, {
      silent: true
    });
    return api;
  };

  api.getMode = function () {
    return ctx.events.getMode();
  };

  api.trash = function () {
    ctx.events.trash({
      silent: true
    });
    return api;
  };

  api.combineFeatures = function () {
    ctx.events.combineFeatures({
      silent: true
    });
    return api;
  };

  api.uncombineFeatures = function () {
    ctx.events.uncombineFeatures({
      silent: true
    });
    return api;
  };

  api.setFeatureProperty = function (featureId, property, value) {
    ctx.store.setFeatureProperty(featureId, property, value);
    return api;
  };

  return api;
};

},{"./constants":14,"./feature_types/line_string":17,"./feature_types/multi_feature":18,"./feature_types/point":19,"./feature_types/polygon":20,"./lib/features_at":28,"./lib/string_set":38,"./lib/string_sets_are_equal":39,"@mapbox/geojson-normalize":7,"@mapbox/geojsonhint":8,"hat":66,"lodash.isequal":68}],14:[function(require,module,exports){
module.exports = {
  classes: {
    CONTROL_BASE: 'mapboxgl-ctrl',
    CONTROL_PREFIX: 'mapboxgl-ctrl-',
    CONTROL_BUTTON: 'mapbox-gl-draw_ctrl-draw-btn',
    CONTROL_BUTTON_LINE: 'mapbox-gl-draw_line',
    CONTROL_BUTTON_POLYGON: 'mapbox-gl-draw_polygon',
    CONTROL_BUTTON_POINT: 'mapbox-gl-draw_point',
    CONTROL_BUTTON_TRASH: 'mapbox-gl-draw_trash',
    CONTROL_BUTTON_COMBINE_FEATURES: 'mapbox-gl-draw_combine',
    CONTROL_BUTTON_UNCOMBINE_FEATURES: 'mapbox-gl-draw_uncombine',
    CONTROL_GROUP: 'mapboxgl-ctrl-group',
    ATTRIBUTION: 'mapboxgl-ctrl-attrib',
    ACTIVE_BUTTON: 'active',
    BOX_SELECT: 'mapbox-gl-draw_boxselect'
  },
  sources: {
    HOT: 'mapbox-gl-draw-hot',
    COLD: 'mapbox-gl-draw-cold'
  },
  cursors: {
    ADD: 'add',
    MOVE: 'move',
    DRAG: 'drag',
    POINTER: 'pointer',
    NONE: 'none'
  },
  types: {
    POLYGON: 'polygon',
    LINE: 'line_string',
    POINT: 'point'
  },
  geojsonTypes: {
    FEATURE: 'Feature',
    POLYGON: 'Polygon',
    LINE_STRING: 'LineString',
    POINT: 'Point',
    FEATURE_COLLECTION: 'FeatureCollection',
    MULTI_PREFIX: 'Multi',
    MULTI_POINT: 'MultiPoint',
    MULTI_LINE_STRING: 'MultiLineString',
    MULTI_POLYGON: 'MultiPolygon'
  },
  modes: {
    DRAW_LINE_STRING: 'draw_line_string',
    DRAW_POLYGON: 'draw_polygon',
    DRAW_POINT: 'draw_point',
    SIMPLE_SELECT: 'simple_select',
    DIRECT_SELECT: 'direct_select',
    STATIC: 'static'
  },
  events: {
    CREATE: 'draw.create',
    DELETE: 'draw.delete',
    UPDATE: 'draw.update',
    SELECTION_CHANGE: 'draw.selectionchange',
    MODE_CHANGE: 'draw.modechange',
    ACTIONABLE: 'draw.actionable',
    RENDER: 'draw.render',
    COMBINE_FEATURES: 'draw.combine',
    UNCOMBINE_FEATURES: 'draw.uncombine'
  },
  updateActions: {
    MOVE: 'move',
    CHANGE_COORDINATES: 'change_coordinates'
  },
  meta: {
    FEATURE: 'feature',
    MIDPOINT: 'midpoint',
    VERTEX: 'vertex'
  },
  activeStates: {
    ACTIVE: 'true',
    INACTIVE: 'false'
  },
  interactions: ['scrollZoom', 'boxZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'],
  LAT_MIN: -90,
  LAT_RENDERED_MIN: -85,
  LAT_MAX: 90,
  LAT_RENDERED_MAX: 85,
  LNG_MIN: -270,
  LNG_MAX: 270
};

},{}],15:[function(require,module,exports){
const setupModeHandler = require('./lib/mode_handler');

const getFeaturesAndSetCursor = require('./lib/get_features_and_set_cursor');

const featuresAt = require('./lib/features_at');

const isClick = require('./lib/is_click');

const isTap = require('./lib/is_tap');

const Constants = require('./constants');

const objectToMode = require('./modes/object_to_mode');

module.exports = function (ctx) {
  const modes = Object.keys(ctx.options.modes).reduce((m, k) => {
    m[k] = objectToMode(ctx.options.modes[k]);
    return m;
  }, {});
  let mouseDownInfo = {};
  let touchStartInfo = {};
  const events = {};
  let currentModeName = null;
  let currentMode = null;

  events.drag = function (event, isDrag) {
    if (isDrag({
      point: event.point,
      time: new Date().getTime()
    })) {
      ctx.ui.queueMapClasses({
        mouse: Constants.cursors.DRAG
      });
      currentMode.drag(event);
    } else {
      event.originalEvent.stopPropagation();
    }
  };

  events.mousedrag = function (event) {
    events.drag(event, endInfo => !isClick(mouseDownInfo, endInfo));
  };

  events.touchdrag = function (event) {
    events.drag(event, endInfo => !isTap(touchStartInfo, endInfo));
  };

  events.mousemove = function (event) {
    const button = event.originalEvent.buttons !== undefined ? event.originalEvent.buttons : event.originalEvent.which;

    if (button === 1) {
      return events.mousedrag(event);
    }

    const target = getFeaturesAndSetCursor(event, ctx);
    event.featureTarget = target;
    currentMode.mousemove(event);
  };

  events.mousedown = function (event) {
    mouseDownInfo = {
      time: new Date().getTime(),
      point: event.point
    };
    const target = getFeaturesAndSetCursor(event, ctx);
    event.featureTarget = target;
    currentMode.mousedown(event);
  };

  events.mouseup = function (event) {
    const target = getFeaturesAndSetCursor(event, ctx);
    event.featureTarget = target;

    if (isClick(mouseDownInfo, {
      point: event.point,
      time: new Date().getTime()
    })) {
      currentMode.click(event);
    } else {
      currentMode.mouseup(event);
    }
  };

  events.mouseout = function (event) {
    currentMode.mouseout(event);
  };

  events.touchstart = function (event) {
    // Prevent emulated mouse events because we will fully handle the touch here.
    // This does not stop the touch events from propogating to mapbox though.
    event.originalEvent.preventDefault();

    if (!ctx.options.touchEnabled) {
      return;
    }

    touchStartInfo = {
      time: new Date().getTime(),
      point: event.point
    };
    const target = featuresAt.touch(event, null, ctx)[0];
    event.featureTarget = target;
    currentMode.touchstart(event);
  };

  events.touchmove = function (event) {
    event.originalEvent.preventDefault();

    if (!ctx.options.touchEnabled) {
      return;
    }

    currentMode.touchmove(event);
    return events.touchdrag(event);
  };

  events.touchend = function (event) {
    event.originalEvent.preventDefault();

    if (!ctx.options.touchEnabled) {
      return;
    }

    const target = featuresAt.touch(event, null, ctx)[0];
    event.featureTarget = target;

    if (isTap(touchStartInfo, {
      time: new Date().getTime(),
      point: event.point
    })) {
      currentMode.tap(event);
    } else {
      currentMode.touchend(event);
    }
  }; // 8 - Backspace
  // 46 - Delete


  const isKeyModeValid = code => !(code === 8 || code === 46 || code >= 48 && code <= 57);

  events.keydown = function (event) {
    if ((event.srcElement || event.target).classList[0] !== 'mapboxgl-canvas') return; // we only handle events on the map

    if ((event.keyCode === 8 || event.keyCode === 46) && ctx.options.controls.trash) {
      event.preventDefault();
      currentMode.trash();
    } else if (isKeyModeValid(event.keyCode)) {
      currentMode.keydown(event);
    } else if (event.keyCode === 49 && ctx.options.controls.point) {
      changeMode(Constants.modes.DRAW_POINT);
    } else if (event.keyCode === 50 && ctx.options.controls.line_string) {
      changeMode(Constants.modes.DRAW_LINE_STRING);
    } else if (event.keyCode === 51 && ctx.options.controls.polygon) {
      changeMode(Constants.modes.DRAW_POLYGON);
    }
  };

  events.keyup = function (event) {
    if (isKeyModeValid(event.keyCode)) {
      currentMode.keyup(event);
    }
  };

  events.zoomend = function () {
    ctx.store.changeZoom();
  };

  events.data = function (event) {
    if (event.dataType === 'style') {
      const {
        setup,
        map,
        options,
        store
      } = ctx;
      const hasLayers = options.styles.some(style => map.getLayer(style.id));

      if (!hasLayers) {
        setup.addLayers();
        store.setDirty();
        store.render();
      }
    }
  };

  function changeMode(modename, nextModeOptions, eventOptions = {}) {
    currentMode.stop();
    const modebuilder = modes[modename];

    if (modebuilder === undefined) {
      throw new Error(`${modename} is not valid`);
    }

    currentModeName = modename;
    const mode = modebuilder(ctx, nextModeOptions);
    currentMode = setupModeHandler(mode, ctx);

    if (!eventOptions.silent) {
      ctx.map.fire(Constants.events.MODE_CHANGE, {
        mode: modename
      });
    }

    ctx.store.setDirty();
    ctx.store.render();
  }

  const actionState = {
    trash: false,
    combineFeatures: false,
    uncombineFeatures: false
  };

  function actionable(actions) {
    let changed = false;
    Object.keys(actions).forEach(action => {
      if (actionState[action] === undefined) throw new Error('Invalid action type');
      if (actionState[action] !== actions[action]) changed = true;
      actionState[action] = actions[action];
    });
    if (changed) ctx.map.fire(Constants.events.ACTIONABLE, {
      actions: actionState
    });
  }

  const api = {
    start: function () {
      currentModeName = ctx.options.defaultMode;
      currentMode = setupModeHandler(modes[currentModeName](ctx), ctx);
    },
    changeMode,
    actionable,
    currentModeName: function () {
      return currentModeName;
    },
    currentModeRender: function (geojson, push) {
      return currentMode.render(geojson, push);
    },
    fire: function (name, event) {
      if (events[name]) {
        events[name](event);
      }
    },
    addEventListeners: function () {
      ctx.map.on('mousemove', events.mousemove);
      ctx.map.on('mousedown', events.mousedown);
      ctx.map.on('mouseup', events.mouseup);
      ctx.map.on('data', events.data);
      ctx.map.on('touchmove', events.touchmove);
      ctx.map.on('touchstart', events.touchstart);
      ctx.map.on('touchend', events.touchend);
      ctx.container.addEventListener('mouseout', events.mouseout);

      if (ctx.options.keybindings) {
        ctx.container.addEventListener('keydown', events.keydown);
        ctx.container.addEventListener('keyup', events.keyup);
      }
    },
    removeEventListeners: function () {
      ctx.map.off('mousemove', events.mousemove);
      ctx.map.off('mousedown', events.mousedown);
      ctx.map.off('mouseup', events.mouseup);
      ctx.map.off('data', events.data);
      ctx.map.off('touchmove', events.touchmove);
      ctx.map.off('touchstart', events.touchstart);
      ctx.map.off('touchend', events.touchend);
      ctx.container.removeEventListener('mouseout', events.mouseout);

      if (ctx.options.keybindings) {
        ctx.container.removeEventListener('keydown', events.keydown);
        ctx.container.removeEventListener('keyup', events.keyup);
      }
    },
    trash: function (options) {
      currentMode.trash(options);
    },
    combineFeatures: function () {
      currentMode.combineFeatures();
    },
    uncombineFeatures: function () {
      currentMode.uncombineFeatures();
    },
    getMode: function () {
      return currentModeName;
    }
  };
  return api;
};

},{"./constants":14,"./lib/features_at":28,"./lib/get_features_and_set_cursor":29,"./lib/is_click":30,"./lib/is_tap":32,"./lib/mode_handler":34,"./modes/object_to_mode":50}],16:[function(require,module,exports){
const hat = require('hat');

const Constants = require('../constants');

const Feature = function (ctx, geojson) {
  this.ctx = ctx;
  this.properties = geojson.properties || {};
  this.coordinates = geojson.geometry.coordinates;
  this.id = geojson.id || hat();
  this.type = geojson.geometry.type;
};

Feature.prototype.changed = function () {
  this.ctx.store.featureChanged(this.id);
};

Feature.prototype.incomingCoords = function (coords) {
  this.setCoordinates(coords);
};

Feature.prototype.setCoordinates = function (coords) {
  this.coordinates = coords;
  this.changed();
};

Feature.prototype.getCoordinates = function () {
  return JSON.parse(JSON.stringify(this.coordinates));
};

Feature.prototype.setProperty = function (property, value) {
  this.properties[property] = value;
};

Feature.prototype.toGeoJSON = function () {
  return JSON.parse(JSON.stringify({
    id: this.id,
    type: Constants.geojsonTypes.FEATURE,
    properties: this.properties,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  }));
};

Feature.prototype.internal = function (mode) {
  const properties = {
    id: this.id,
    meta: Constants.meta.FEATURE,
    'meta:type': this.type,
    active: Constants.activeStates.INACTIVE,
    mode: mode
  };

  if (this.ctx.options.userProperties) {
    for (const name in this.properties) {
      properties[`user_${name}`] = this.properties[name];
    }
  }

  return {
    type: Constants.geojsonTypes.FEATURE,
    properties: properties,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  };
};

module.exports = Feature;

},{"../constants":14,"hat":66}],17:[function(require,module,exports){
const Feature = require('./feature');

const LineString = function (ctx, geojson) {
  Feature.call(this, ctx, geojson);
};

LineString.prototype = Object.create(Feature.prototype);

LineString.prototype.isValid = function () {
  return this.coordinates.length > 1;
};

LineString.prototype.addCoordinate = function (path, lng, lat) {
  this.changed();
  const id = parseInt(path, 10);
  this.coordinates.splice(id, 0, [lng, lat]);
};

LineString.prototype.getCoordinate = function (path) {
  const id = parseInt(path, 10);
  return JSON.parse(JSON.stringify(this.coordinates[id]));
};

LineString.prototype.removeCoordinate = function (path) {
  this.changed();
  this.coordinates.splice(parseInt(path, 10), 1);
};

LineString.prototype.updateCoordinate = function (path, lng, lat) {
  const id = parseInt(path, 10);
  this.coordinates[id] = [lng, lat];
  this.changed();
};

module.exports = LineString;

},{"./feature":16}],18:[function(require,module,exports){
const Feature = require('./feature');

const Constants = require('../constants');

const hat = require('hat');

const models = {
  MultiPoint: require('./point'),
  MultiLineString: require('./line_string'),
  MultiPolygon: require('./polygon')
};

const takeAction = (features, action, path, lng, lat) => {
  const parts = path.split('.');
  const idx = parseInt(parts[0], 10);
  const tail = !parts[1] ? null : parts.slice(1).join('.');
  return features[idx][action](tail, lng, lat);
};

const MultiFeature = function (ctx, geojson) {
  Feature.call(this, ctx, geojson);
  delete this.coordinates;
  this.model = models[geojson.geometry.type];
  if (this.model === undefined) throw new TypeError(`${geojson.geometry.type} is not a valid type`);
  this.features = this._coordinatesToFeatures(geojson.geometry.coordinates);
};

MultiFeature.prototype = Object.create(Feature.prototype);

MultiFeature.prototype._coordinatesToFeatures = function (coordinates) {
  const Model = this.model.bind(this);
  return coordinates.map(coords => new Model(this.ctx, {
    id: hat(),
    type: Constants.geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      coordinates: coords,
      type: this.type.replace('Multi', '')
    }
  }));
};

MultiFeature.prototype.isValid = function () {
  return this.features.every(f => f.isValid());
};

MultiFeature.prototype.setCoordinates = function (coords) {
  this.features = this._coordinatesToFeatures(coords);
  this.changed();
};

MultiFeature.prototype.getCoordinate = function (path) {
  return takeAction(this.features, 'getCoordinate', path);
};

MultiFeature.prototype.getCoordinates = function () {
  return JSON.parse(JSON.stringify(this.features.map(f => {
    if (f.type === Constants.geojsonTypes.POLYGON) return f.getCoordinates();
    return f.coordinates;
  })));
};

MultiFeature.prototype.updateCoordinate = function (path, lng, lat) {
  takeAction(this.features, 'updateCoordinate', path, lng, lat);
  this.changed();
};

MultiFeature.prototype.addCoordinate = function (path, lng, lat) {
  takeAction(this.features, 'addCoordinate', path, lng, lat);
  this.changed();
};

MultiFeature.prototype.removeCoordinate = function (path) {
  takeAction(this.features, 'removeCoordinate', path);
  this.changed();
};

MultiFeature.prototype.getFeatures = function () {
  return this.features;
};

module.exports = MultiFeature;

},{"../constants":14,"./feature":16,"./line_string":17,"./point":19,"./polygon":20,"hat":66}],19:[function(require,module,exports){
const Feature = require('./feature');

const Point = function (ctx, geojson) {
  Feature.call(this, ctx, geojson);
};

Point.prototype = Object.create(Feature.prototype);

Point.prototype.isValid = function () {
  return typeof this.coordinates[0] === 'number' && typeof this.coordinates[1] === 'number';
};

Point.prototype.updateCoordinate = function (pathOrLng, lngOrLat, lat) {
  if (arguments.length === 3) {
    this.coordinates = [lngOrLat, lat];
  } else {
    this.coordinates = [pathOrLng, lngOrLat];
  }

  this.changed();
};

Point.prototype.getCoordinate = function () {
  return this.getCoordinates();
};

module.exports = Point;

},{"./feature":16}],20:[function(require,module,exports){
const Feature = require('./feature');

const Polygon = function (ctx, geojson) {
  Feature.call(this, ctx, geojson);
  this.coordinates = this.coordinates.map(ring => ring.slice(0, -1));
};

Polygon.prototype = Object.create(Feature.prototype);

Polygon.prototype.isValid = function () {
  if (this.coordinates.length === 0) return false;
  return this.coordinates.every(ring => ring.length > 2);
}; // Expects valid geoJSON polygon geometry: first and last positions must be equivalent.


Polygon.prototype.incomingCoords = function (coords) {
  this.coordinates = coords.map(ring => ring.slice(0, -1));
  this.changed();
}; // Does NOT expect valid geoJSON polygon geometry: first and last positions should not be equivalent.


Polygon.prototype.setCoordinates = function (coords) {
  this.coordinates = coords;
  this.changed();
};

Polygon.prototype.addCoordinate = function (path, lng, lat) {
  this.changed();
  const ids = path.split('.').map(x => parseInt(x, 10));
  const ring = this.coordinates[ids[0]];
  ring.splice(ids[1], 0, [lng, lat]);
};

Polygon.prototype.removeCoordinate = function (path) {
  this.changed();
  const ids = path.split('.').map(x => parseInt(x, 10));
  const ring = this.coordinates[ids[0]];

  if (ring) {
    ring.splice(ids[1], 1);

    if (ring.length < 3) {
      this.coordinates.splice(ids[0], 1);
    }
  }
};

Polygon.prototype.getCoordinate = function (path) {
  const ids = path.split('.').map(x => parseInt(x, 10));
  const ring = this.coordinates[ids[0]];
  return JSON.parse(JSON.stringify(ring[ids[1]]));
};

Polygon.prototype.getCoordinates = function () {
  return this.coordinates.map(coords => coords.concat([coords[0]]));
};

Polygon.prototype.updateCoordinate = function (path, lng, lat) {
  this.changed();
  const parts = path.split('.');
  const ringId = parseInt(parts[0], 10);
  const coordId = parseInt(parts[1], 10);

  if (this.coordinates[ringId] === undefined) {
    this.coordinates[ringId] = [];
  }

  this.coordinates[ringId][coordId] = [lng, lat];
};

module.exports = Polygon;

},{"./feature":16}],21:[function(require,module,exports){
const Constants = require('../constants');

module.exports = {
  isOfMetaType: function (type) {
    return function (e) {
      const featureTarget = e.featureTarget;
      if (!featureTarget) return false;
      if (!featureTarget.properties) return false;
      return featureTarget.properties.meta === type;
    };
  },
  isShiftMousedown: function (e) {
    if (!e.originalEvent) return false;
    if (!e.originalEvent.shiftKey) return false;
    return e.originalEvent.button === 0;
  },
  isActiveFeature: function (e) {
    if (!e.featureTarget) return false;
    if (!e.featureTarget.properties) return false;
    return e.featureTarget.properties.active === Constants.activeStates.ACTIVE && e.featureTarget.properties.meta === Constants.meta.FEATURE;
  },
  isInactiveFeature: function (e) {
    if (!e.featureTarget) return false;
    if (!e.featureTarget.properties) return false;
    return e.featureTarget.properties.active === Constants.activeStates.INACTIVE && e.featureTarget.properties.meta === Constants.meta.FEATURE;
  },
  noTarget: function (e) {
    return e.featureTarget === undefined;
  },
  isFeature: function (e) {
    if (!e.featureTarget) return false;
    if (!e.featureTarget.properties) return false;
    return e.featureTarget.properties.meta === Constants.meta.FEATURE;
  },
  isVertex: function (e) {
    const featureTarget = e.featureTarget;
    if (!featureTarget) return false;
    if (!featureTarget.properties) return false;
    return featureTarget.properties.meta === Constants.meta.VERTEX;
  },
  isShiftDown: function (e) {
    if (!e.originalEvent) return false;
    return e.originalEvent.shiftKey === true;
  },
  isEscapeKey: function (e) {
    return e.keyCode === 27;
  },
  isEnterKey: function (e) {
    return e.keyCode === 13;
  },
  true: function () {
    return true;
  }
};

},{"../constants":14}],22:[function(require,module,exports){
const extent = require('@mapbox/geojson-extent');

const Constants = require('../constants');

const {
  LAT_MIN,
  LAT_MAX,
  LAT_RENDERED_MIN,
  LAT_RENDERED_MAX,
  LNG_MIN,
  LNG_MAX
} = Constants; // Ensure that we do not drag north-south far enough for
// - any part of any feature to exceed the poles
// - any feature to be completely lost in the space between the projection's
//   edge and the poles, such that it couldn't be re-selected and moved back

module.exports = function (geojsonFeatures, delta) {
  // "inner edge" = a feature's latitude closest to the equator
  let northInnerEdge = LAT_MIN;
  let southInnerEdge = LAT_MAX; // "outer edge" = a feature's latitude furthest from the equator

  let northOuterEdge = LAT_MIN;
  let southOuterEdge = LAT_MAX;
  let westEdge = LNG_MAX;
  let eastEdge = LNG_MIN;
  geojsonFeatures.forEach(feature => {
    const bounds = extent(feature);
    const featureSouthEdge = bounds[1];
    const featureNorthEdge = bounds[3];
    const featureWestEdge = bounds[0];
    const featureEastEdge = bounds[2];
    if (featureSouthEdge > northInnerEdge) northInnerEdge = featureSouthEdge;
    if (featureNorthEdge < southInnerEdge) southInnerEdge = featureNorthEdge;
    if (featureNorthEdge > northOuterEdge) northOuterEdge = featureNorthEdge;
    if (featureSouthEdge < southOuterEdge) southOuterEdge = featureSouthEdge;
    if (featureWestEdge < westEdge) westEdge = featureWestEdge;
    if (featureEastEdge > eastEdge) eastEdge = featureEastEdge;
  }); // These changes are not mutually exclusive: we might hit the inner
  // edge but also have hit the outer edge and therefore need
  // another readjustment

  const constrainedDelta = delta;

  if (northInnerEdge + constrainedDelta.lat > LAT_RENDERED_MAX) {
    constrainedDelta.lat = LAT_RENDERED_MAX - northInnerEdge;
  }

  if (northOuterEdge + constrainedDelta.lat > LAT_MAX) {
    constrainedDelta.lat = LAT_MAX - northOuterEdge;
  }

  if (southInnerEdge + constrainedDelta.lat < LAT_RENDERED_MIN) {
    constrainedDelta.lat = LAT_RENDERED_MIN - southInnerEdge;
  }

  if (southOuterEdge + constrainedDelta.lat < LAT_MIN) {
    constrainedDelta.lat = LAT_MIN - southOuterEdge;
  }

  if (westEdge + constrainedDelta.lng <= LNG_MIN) {
    constrainedDelta.lng += Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
  }

  if (eastEdge + constrainedDelta.lng >= LNG_MAX) {
    constrainedDelta.lng -= Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
  }

  return constrainedDelta;
};

},{"../constants":14,"@mapbox/geojson-extent":6}],23:[function(require,module,exports){
const Constants = require('../constants');

module.exports = function (parent, startVertex, endVertex, map) {
  const startCoord = startVertex.geometry.coordinates;
  const endCoord = endVertex.geometry.coordinates; // If a coordinate exceeds the projection, we can't calculate a midpoint,
  // so run away

  if (startCoord[1] > Constants.LAT_RENDERED_MAX || startCoord[1] < Constants.LAT_RENDERED_MIN || endCoord[1] > Constants.LAT_RENDERED_MAX || endCoord[1] < Constants.LAT_RENDERED_MIN) {
    return null;
  }

  const ptA = map.project([startCoord[0], startCoord[1]]);
  const ptB = map.project([endCoord[0], endCoord[1]]);
  const mid = map.unproject([(ptA.x + ptB.x) / 2, (ptA.y + ptB.y) / 2]);
  return {
    type: Constants.geojsonTypes.FEATURE,
    properties: {
      meta: Constants.meta.MIDPOINT,
      parent: parent,
      lng: mid.lng,
      lat: mid.lat,
      coord_path: endVertex.properties.coord_path
    },
    geometry: {
      type: Constants.geojsonTypes.POINT,
      coordinates: [mid.lng, mid.lat]
    }
  };
};

},{"../constants":14}],24:[function(require,module,exports){
const createVertex = require('./create_vertex');

const createMidpoint = require('./create_midpoint');

const Constants = require('../constants');

function createSupplementaryPoints(geojson, options = {}, basePath = null) {
  const {
    type,
    coordinates
  } = geojson.geometry;
  const featureId = geojson.properties && geojson.properties.id;
  let supplementaryPoints = [];

  if (type === Constants.geojsonTypes.POINT) {
    // For points, just create a vertex
    supplementaryPoints.push(createVertex(featureId, coordinates, basePath, isSelectedPath(basePath)));
  } else if (type === Constants.geojsonTypes.POLYGON) {
    // Cycle through a Polygon's rings and
    // process each line
    coordinates.forEach((line, lineIndex) => {
      processLine(line, basePath !== null ? `${basePath}.${lineIndex}` : String(lineIndex));
    });
  } else if (type === Constants.geojsonTypes.LINE_STRING) {
    processLine(coordinates, basePath);
  } else if (type.indexOf(Constants.geojsonTypes.MULTI_PREFIX) === 0) {
    processMultiGeometry();
  }

  function processLine(line, lineBasePath) {
    let firstPointString = '';
    let lastVertex = null;
    line.forEach((point, pointIndex) => {
      const pointPath = lineBasePath !== undefined && lineBasePath !== null ? `${lineBasePath}.${pointIndex}` : String(pointIndex);
      const vertex = createVertex(featureId, point, pointPath, isSelectedPath(pointPath)); // If we're creating midpoints, check if there was a
      // vertex before this one. If so, add a midpoint
      // between that vertex and this one.

      if (options.midpoints && lastVertex) {
        const midpoint = createMidpoint(featureId, lastVertex, vertex, options.map);

        if (midpoint) {
          supplementaryPoints.push(midpoint);
        }
      }

      lastVertex = vertex; // A Polygon line's last point is the same as the first point. If we're on the last
      // point, we want to draw a midpoint before it but not another vertex on it
      // (since we already a vertex there, from the first point).

      const stringifiedPoint = JSON.stringify(point);

      if (firstPointString !== stringifiedPoint) {
        supplementaryPoints.push(vertex);
      }

      if (pointIndex === 0) {
        firstPointString = stringifiedPoint;
      }
    });
  }

  function isSelectedPath(path) {
    if (!options.selectedPaths) return false;
    return options.selectedPaths.indexOf(path) !== -1;
  } // Split a multi-geometry into constituent
  // geometries, and accumulate the supplementary points
  // for each of those constituents


  function processMultiGeometry() {
    const subType = type.replace(Constants.geojsonTypes.MULTI_PREFIX, '');
    coordinates.forEach((subCoordinates, index) => {
      const subFeature = {
        type: Constants.geojsonTypes.FEATURE,
        properties: geojson.properties,
        geometry: {
          type: subType,
          coordinates: subCoordinates
        }
      };
      supplementaryPoints = supplementaryPoints.concat(createSupplementaryPoints(subFeature, options, index));
    });
  }

  return supplementaryPoints;
}

module.exports = createSupplementaryPoints;

},{"../constants":14,"./create_midpoint":23,"./create_vertex":25}],25:[function(require,module,exports){
const Constants = require('../constants');
/**
 * Returns GeoJSON for a Point representing the
 * vertex of another feature.
 *
 * @param {string} parentId
 * @param {Array<number>} coordinates
 * @param {string} path - Dot-separated numbers indicating exactly
 *   where the point exists within its parent feature's coordinates.
 * @param {boolean} selected
 * @return {GeoJSON} Point
 */


module.exports = function (parentId, coordinates, path, selected) {
  return {
    type: Constants.geojsonTypes.FEATURE,
    properties: {
      meta: Constants.meta.VERTEX,
      parent: parentId,
      coord_path: path,
      active: selected ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE
    },
    geometry: {
      type: Constants.geojsonTypes.POINT,
      coordinates: coordinates
    }
  };
};

},{"../constants":14}],26:[function(require,module,exports){
module.exports = {
  enable(ctx) {
    setTimeout(() => {
      // First check we've got a map and some context.
      if (!ctx.map || !ctx.map.doubleClickZoom || !ctx._ctx || !ctx._ctx.store || !ctx._ctx.store.getInitialConfigValue) return; // Now check initial state wasn't false (we leave it disabled if so)

      if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
      ctx.map.doubleClickZoom.enable();
    }, 0);
  },

  disable(ctx) {
    setTimeout(() => {
      if (!ctx.map || !ctx.map.doubleClickZoom) return; // Always disable here, as it's necessary in some cases.

      ctx.map.doubleClickZoom.disable();
    }, 0);
  }

};

},{}],27:[function(require,module,exports){
module.exports = function (a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x * x + y * y);
};

},{}],28:[function(require,module,exports){
const sortFeatures = require('./sort_features');

const mapEventToBoundingBox = require('./map_event_to_bounding_box');

const Constants = require('../constants');

const StringSet = require('./string_set');

const META_TYPES = [Constants.meta.FEATURE, Constants.meta.MIDPOINT, Constants.meta.VERTEX]; // Requires either event or bbox

module.exports = {
  click: featuresAtClick,
  touch: featuresAtTouch
};

function featuresAtClick(event, bbox, ctx) {
  return featuresAt(event, bbox, ctx, ctx.options.clickBuffer);
}

function featuresAtTouch(event, bbox, ctx) {
  return featuresAt(event, bbox, ctx, ctx.options.touchBuffer);
}

function featuresAt(event, bbox, ctx, buffer) {
  if (ctx.map === null) return [];
  const box = event ? mapEventToBoundingBox(event, buffer) : bbox;
  const queryParams = {};
  if (ctx.options.styles) queryParams.layers = ctx.options.styles.map(s => s.id);
  const features = ctx.map.queryRenderedFeatures(box, queryParams).filter(feature => {
    return META_TYPES.indexOf(feature.properties.meta) !== -1;
  });
  const featureIds = new StringSet();
  const uniqueFeatures = [];
  features.forEach(feature => {
    const featureId = feature.properties.id;
    if (featureIds.has(featureId)) return;
    featureIds.add(featureId);
    uniqueFeatures.push(feature);
  });
  return sortFeatures(uniqueFeatures);
}

},{"../constants":14,"./map_event_to_bounding_box":33,"./sort_features":37,"./string_set":38}],29:[function(require,module,exports){
const featuresAt = require('./features_at');

const Constants = require('../constants');

module.exports = function getFeatureAtAndSetCursors(event, ctx) {
  const features = featuresAt.click(event, null, ctx);
  const classes = {
    mouse: Constants.cursors.NONE
  };

  if (features[0]) {
    classes.mouse = features[0].properties.active === Constants.activeStates.ACTIVE ? Constants.cursors.MOVE : Constants.cursors.POINTER;
    classes.feature = features[0].properties.meta;
  }

  if (ctx.events.currentModeName().indexOf('draw') !== -1) {
    classes.mouse = Constants.cursors.ADD;
  }

  ctx.ui.queueMapClasses(classes);
  ctx.ui.updateMapClasses();
  return features[0];
};

},{"../constants":14,"./features_at":28}],30:[function(require,module,exports){
const euclideanDistance = require('./euclidean_distance');

const FINE_TOLERANCE = 4;
const GROSS_TOLERANCE = 12;
const INTERVAL = 500;

module.exports = function isClick(start, end, options = {}) {
  const fineTolerance = options.fineTolerance != null ? options.fineTolerance : FINE_TOLERANCE;
  const grossTolerance = options.grossTolerance != null ? options.grossTolerance : GROSS_TOLERANCE;
  const interval = options.interval != null ? options.interval : INTERVAL;
  start.point = start.point || end.point;
  start.time = start.time || end.time;
  const moveDistance = euclideanDistance(start.point, end.point);
  return moveDistance < fineTolerance || moveDistance < grossTolerance && end.time - start.time < interval;
};

},{"./euclidean_distance":27}],31:[function(require,module,exports){
function isEventAtCoordinates(event, coordinates) {
  if (!event.lngLat) return false;
  return event.lngLat.lng === coordinates[0] && event.lngLat.lat === coordinates[1];
}

module.exports = isEventAtCoordinates;

},{}],32:[function(require,module,exports){
const euclideanDistance = require('./euclidean_distance');

const TOLERANCE = 25;
const INTERVAL = 250;

module.exports = function isTap(start, end, options = {}) {
  const tolerance = options.tolerance != null ? options.tolerance : TOLERANCE;
  const interval = options.interval != null ? options.interval : INTERVAL;
  start.point = start.point || end.point;
  start.time = start.time || end.time;
  const moveDistance = euclideanDistance(start.point, end.point);
  return moveDistance < tolerance && end.time - start.time < interval;
};

},{"./euclidean_distance":27}],33:[function(require,module,exports){
/**
 * Returns a bounding box representing the event's location.
 *
 * @param {Event} mapEvent - Mapbox GL JS map event, with a point properties.
 * @return {Array<Array<number>>} Bounding box.
 */
function mapEventToBoundingBox(mapEvent, buffer = 0) {
  return [[mapEvent.point.x - buffer, mapEvent.point.y - buffer], [mapEvent.point.x + buffer, mapEvent.point.y + buffer]];
}

module.exports = mapEventToBoundingBox;

},{}],34:[function(require,module,exports){
const ModeHandler = function (mode, DrawContext) {
  const handlers = {
    drag: [],
    click: [],
    mousemove: [],
    mousedown: [],
    mouseup: [],
    mouseout: [],
    keydown: [],
    keyup: [],
    touchstart: [],
    touchmove: [],
    touchend: [],
    tap: []
  };
  const ctx = {
    on: function (event, selector, fn) {
      if (handlers[event] === undefined) {
        throw new Error(`Invalid event type: ${event}`);
      }

      handlers[event].push({
        selector: selector,
        fn: fn
      });
    },
    render: function (id) {
      DrawContext.store.featureChanged(id);
    }
  };

  const delegate = function (eventName, event) {
    const handles = handlers[eventName];
    let iHandle = handles.length;

    while (iHandle--) {
      const handle = handles[iHandle];

      if (handle.selector(event)) {
        handle.fn.call(ctx, event);
        DrawContext.store.render();
        DrawContext.ui.updateMapClasses(); // ensure an event is only handled once
        // we do this to let modes have multiple overlapping selectors
        // and relay on order of oppertations to filter

        break;
      }
    }
  };

  mode.start.call(ctx);
  return {
    render: mode.render,
    stop: function () {
      if (mode.stop) mode.stop();
    },
    trash: function () {
      if (mode.trash) {
        mode.trash();
        DrawContext.store.render();
      }
    },
    combineFeatures: function () {
      if (mode.combineFeatures) {
        mode.combineFeatures();
      }
    },
    uncombineFeatures: function () {
      if (mode.uncombineFeatures) {
        mode.uncombineFeatures();
      }
    },
    drag: function (event) {
      delegate('drag', event);
    },
    click: function (event) {
      delegate('click', event);
    },
    mousemove: function (event) {
      delegate('mousemove', event);
    },
    mousedown: function (event) {
      delegate('mousedown', event);
    },
    mouseup: function (event) {
      delegate('mouseup', event);
    },
    mouseout: function (event) {
      delegate('mouseout', event);
    },
    keydown: function (event) {
      delegate('keydown', event);
    },
    keyup: function (event) {
      delegate('keyup', event);
    },
    touchstart: function (event) {
      delegate('touchstart', event);
    },
    touchmove: function (event) {
      delegate('touchmove', event);
    },
    touchend: function (event) {
      delegate('touchend', event);
    },
    tap: function (event) {
      delegate('tap', event);
    }
  };
};

module.exports = ModeHandler;

},{}],35:[function(require,module,exports){
const Point = require('@mapbox/point-geometry');
/**
 * Returns a Point representing a mouse event's position
 * relative to a containing element.
 *
 * @param {MouseEvent} mouseEvent
 * @param {Node} container
 * @returns {Point}
 */


function mouseEventPoint(mouseEvent, container) {
  const rect = container.getBoundingClientRect();
  return new Point(mouseEvent.clientX - rect.left - (container.clientLeft || 0), mouseEvent.clientY - rect.top - (container.clientTop || 0));
}

module.exports = mouseEventPoint;

},{"@mapbox/point-geometry":57}],36:[function(require,module,exports){
const constrainFeatureMovement = require('./constrain_feature_movement');

const Constants = require('../constants');

module.exports = function (features, delta) {
  const constrainedDelta = constrainFeatureMovement(features.map(feature => feature.toGeoJSON()), delta);
  features.forEach(feature => {
    const currentCoordinates = feature.getCoordinates();

    const moveCoordinate = coord => {
      const point = {
        lng: coord[0] + constrainedDelta.lng,
        lat: coord[1] + constrainedDelta.lat
      };
      return [point.lng, point.lat];
    };

    const moveRing = ring => ring.map(coord => moveCoordinate(coord));

    const moveMultiPolygon = multi => multi.map(ring => moveRing(ring));

    let nextCoordinates;

    if (feature.type === Constants.geojsonTypes.POINT) {
      nextCoordinates = moveCoordinate(currentCoordinates);
    } else if (feature.type === Constants.geojsonTypes.LINE_STRING || feature.type === Constants.geojsonTypes.MULTI_POINT) {
      nextCoordinates = currentCoordinates.map(moveCoordinate);
    } else if (feature.type === Constants.geojsonTypes.POLYGON || feature.type === Constants.geojsonTypes.MULTI_LINE_STRING) {
      nextCoordinates = currentCoordinates.map(moveRing);
    } else if (feature.type === Constants.geojsonTypes.MULTI_POLYGON) {
      nextCoordinates = currentCoordinates.map(moveMultiPolygon);
    }

    feature.incomingCoords(nextCoordinates);
  });
};

},{"../constants":14,"./constrain_feature_movement":22}],37:[function(require,module,exports){
const area = require('@mapbox/geojson-area');

const Constants = require('../constants');

const FEATURE_SORT_RANKS = {
  Point: 0,
  LineString: 1,
  Polygon: 2
};

function comparator(a, b) {
  const score = FEATURE_SORT_RANKS[a.geometry.type] - FEATURE_SORT_RANKS[b.geometry.type];

  if (score === 0 && a.geometry.type === Constants.geojsonTypes.POLYGON) {
    return a.area - b.area;
  }

  return score;
} // Sort in the order above, then sort polygons by area ascending.


function sortFeatures(features) {
  return features.map(feature => {
    if (feature.geometry.type === Constants.geojsonTypes.POLYGON) {
      feature.area = area.geometry({
        type: Constants.geojsonTypes.FEATURE,
        property: {},
        geometry: feature.geometry
      });
    }

    return feature;
  }).sort(comparator).map(feature => {
    delete feature.area;
    return feature;
  });
}

module.exports = sortFeatures;

},{"../constants":14,"@mapbox/geojson-area":3}],38:[function(require,module,exports){
function StringSet(items) {
  this._items = {};
  this._nums = {};
  this._length = items ? items.length : 0;
  if (!items) return;

  for (let i = 0, l = items.length; i < l; i++) {
    this.add(items[i]);
    if (items[i] === undefined) continue;
    if (typeof items[i] === 'string') this._items[items[i]] = i;else this._nums[items[i]] = i;
  }
}

StringSet.prototype.add = function (x) {
  if (this.has(x)) return this;
  this._length++;
  if (typeof x === 'string') this._items[x] = this._length;else this._nums[x] = this._length;
  return this;
};

StringSet.prototype.delete = function (x) {
  if (this.has(x) === false) return this;
  this._length--;
  delete this._items[x];
  delete this._nums[x];
  return this;
};

StringSet.prototype.has = function (x) {
  if (typeof x !== 'string' && typeof x !== 'number') return false;
  return this._items[x] !== undefined || this._nums[x] !== undefined;
};

StringSet.prototype.values = function () {
  const values = [];
  Object.keys(this._items).forEach(k => {
    values.push({
      k: k,
      v: this._items[k]
    });
  });
  Object.keys(this._nums).forEach(k => {
    values.push({
      k: JSON.parse(k),
      v: this._nums[k]
    });
  });
  return values.sort((a, b) => a.v - b.v).map(a => a.k);
};

StringSet.prototype.clear = function () {
  this._length = 0;
  this._items = {};
  this._nums = {};
  return this;
};

module.exports = StringSet;

},{}],39:[function(require,module,exports){
module.exports = function (a, b) {
  if (a.length !== b.length) return false;
  return JSON.stringify(a.map(id => id).sort()) === JSON.stringify(b.map(id => id).sort());
};

},{}],40:[function(require,module,exports){
module.exports = [{
  'id': 'gl-draw-polygon-fill-inactive',
  'type': 'fill',
  'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
  'paint': {
    'fill-color': '#3bb2d0',
    'fill-outline-color': '#3bb2d0',
    'fill-opacity': 0.1
  }
}, {
  'id': 'gl-draw-polygon-fill-active',
  'type': 'fill',
  'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
  'paint': {
    'fill-color': '#fbb03b',
    'fill-outline-color': '#fbb03b',
    'fill-opacity': 0.1
  }
}, {
  'id': 'gl-draw-polygon-midpoint',
  'type': 'circle',
  'filter': ['all', ['==', '$type', 'Point'], ['==', 'meta', 'midpoint']],
  'paint': {
    'circle-radius': 3,
    'circle-color': '#fbb03b'
  }
}, {
  'id': 'gl-draw-polygon-stroke-inactive',
  'type': 'line',
  'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#3bb2d0',
    'line-width': 2
  }
}, {
  'id': 'gl-draw-polygon-stroke-active',
  'type': 'line',
  'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#fbb03b',
    'line-dasharray': [0.2, 2],
    'line-width': 2
  }
}, {
  'id': 'gl-draw-line-inactive',
  'type': 'line',
  'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'LineString'], ['!=', 'mode', 'static']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#3bb2d0',
    'line-width': 2
  }
}, {
  'id': 'gl-draw-line-active',
  'type': 'line',
  'filter': ['all', ['==', '$type', 'LineString'], ['==', 'active', 'true']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#fbb03b',
    'line-dasharray': [0.2, 2],
    'line-width': 2
  }
}, {
  'id': 'gl-draw-polygon-and-line-vertex-stroke-inactive',
  'type': 'circle',
  'filter': ['all', ['==', 'meta', 'vertex'], ['==', '$type', 'Point'], ['!=', 'mode', 'static']],
  'paint': {
    'circle-radius': 5,
    'circle-color': '#fff'
  }
}, {
  'id': 'gl-draw-polygon-and-line-vertex-inactive',
  'type': 'circle',
  'filter': ['all', ['==', 'meta', 'vertex'], ['==', '$type', 'Point'], ['!=', 'mode', 'static']],
  'paint': {
    'circle-radius': 3,
    'circle-color': '#fbb03b'
  }
}, {
  'id': 'gl-draw-point-point-stroke-inactive',
  'type': 'circle',
  'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'Point'], ['==', 'meta', 'feature'], ['!=', 'mode', 'static']],
  'paint': {
    'circle-radius': 5,
    'circle-opacity': 1,
    'circle-color': '#fff'
  }
}, {
  'id': 'gl-draw-point-inactive',
  'type': 'circle',
  'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'Point'], ['==', 'meta', 'feature'], ['!=', 'mode', 'static']],
  'paint': {
    'circle-radius': 3,
    'circle-color': '#3bb2d0'
  }
}, {
  'id': 'gl-draw-point-stroke-active',
  'type': 'circle',
  'filter': ['all', ['==', '$type', 'Point'], ['==', 'active', 'true'], ['!=', 'meta', 'midpoint']],
  'paint': {
    'circle-radius': 7,
    'circle-color': '#fff'
  }
}, {
  'id': 'gl-draw-point-active',
  'type': 'circle',
  'filter': ['all', ['==', '$type', 'Point'], ['!=', 'meta', 'midpoint'], ['==', 'active', 'true']],
  'paint': {
    'circle-radius': 5,
    'circle-color': '#fbb03b'
  }
}, {
  'id': 'gl-draw-polygon-fill-static',
  'type': 'fill',
  'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
  'paint': {
    'fill-color': '#404040',
    'fill-outline-color': '#404040',
    'fill-opacity': 0.1
  }
}, {
  'id': 'gl-draw-polygon-stroke-static',
  'type': 'line',
  'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#404040',
    'line-width': 2
  }
}, {
  'id': 'gl-draw-line-static',
  'type': 'line',
  'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'LineString']],
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#404040',
    'line-width': 2
  }
}, {
  'id': 'gl-draw-point-static',
  'type': 'circle',
  'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Point']],
  'paint': {
    'circle-radius': 5,
    'circle-color': '#404040'
  }
}];

},{}],41:[function(require,module,exports){
function throttle(fn, time, context) {
  let lock, args;

  function later() {
    // reset lock and call if queued
    lock = false;

    if (args) {
      wrapperFn.apply(context, args);
      args = false;
    }
  }

  function wrapperFn() {
    if (lock) {
      // called too soon, queue to call later
      args = arguments;
    } else {
      // lock until later then call
      lock = true;
      fn.apply(context, arguments);
      setTimeout(later, time);
    }
  }

  return wrapperFn;
}

module.exports = throttle;

},{}],42:[function(require,module,exports){
/**
 * Derive a dense array (no `undefined`s) from a single value or array.
 *
 * @param {any} x
 * @return {Array<any>}
 */
function toDenseArray(x) {
  return [].concat(x).filter(y => y !== undefined);
}

module.exports = toDenseArray;

},{}],43:[function(require,module,exports){
const {
  noTarget,
  isOfMetaType,
  isInactiveFeature,
  isShiftDown
} = require('../lib/common_selectors');

const createSupplementaryPoints = require('../lib/create_supplementary_points');

const constrainFeatureMovement = require('../lib/constrain_feature_movement');

const doubleClickZoom = require('../lib/double_click_zoom');

const Constants = require('../constants');

const CommonSelectors = require('../lib/common_selectors');

const moveFeatures = require('../lib/move_features');

const isVertex = isOfMetaType(Constants.meta.VERTEX);
const isMidpoint = isOfMetaType(Constants.meta.MIDPOINT);
const DirectSelect = {}; // INTERNAL FUCNTIONS

DirectSelect.fireUpdate = function () {
  this.map.fire(Constants.events.UPDATE, {
    action: Constants.updateActions.CHANGE_COORDINATES,
    features: this.getSelected().map(f => f.toGeoJSON())
  });
};

DirectSelect.fireActionable = function (state) {
  this.setActionableState({
    combineFeatures: false,
    uncombineFeatures: false,
    trash: state.selectedCoordPaths.length > 0
  });
};

DirectSelect.startDragging = function (state, e) {
  this.map.dragPan.disable();
  state.canDragMove = true;
  state.dragMoveLocation = e.lngLat;
};

DirectSelect.stopDragging = function (state) {
  this.map.dragPan.enable();
  state.dragMoving = false;
  state.canDragMove = false;
  state.dragMoveLocation = null;
};

DirectSelect.onVertex = function (state, e) {
  this.startDragging(state, e);
  const about = e.featureTarget.properties;
  const selectedIndex = state.selectedCoordPaths.indexOf(about.coord_path);

  if (!isShiftDown(e) && selectedIndex === -1) {
    state.selectedCoordPaths = [about.coord_path];
  } else if (isShiftDown(e) && selectedIndex === -1) {
    state.selectedCoordPaths.push(about.coord_path);
  }

  const selectedCoordinates = this.pathsToCoordinates(state.featureId, state.selectedCoordPaths);
  this.setSelectedCoordinates(selectedCoordinates);
};

DirectSelect.onMidpoint = function (state, e) {
  this.startDragging(state, e);
  const about = e.featureTarget.properties;
  state.feature.addCoordinate(about.coord_path, about.lng, about.lat);
  this.fireUpdate();
  state.selectedCoordPaths = [about.coord_path];
};

DirectSelect.pathsToCoordinates = function (featureId, paths) {
  return paths.map(coord_path => {
    return {
      feature_id: featureId,
      coord_path
    };
  });
};

DirectSelect.onFeature = function (state, e) {
  if (state.selectedCoordPaths.length === 0) this.startDragging(state, e);else this.stopDragging(state);
};

DirectSelect.dragFeature = function (state, e, delta) {
  moveFeatures(this.getSelected(), delta);
  state.dragMoveLocation = e.lngLat;
};

DirectSelect.dragVertex = function (state, e, delta) {
  const selectedCoords = state.selectedCoordPaths.map(coord_path => state.feature.getCoordinate(coord_path));
  const selectedCoordPoints = selectedCoords.map(coords => ({
    type: Constants.geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: Constants.geojsonTypes.POINT,
      coordinates: coords
    }
  }));
  const constrainedDelta = constrainFeatureMovement(selectedCoordPoints, delta);

  for (let i = 0; i < selectedCoords.length; i++) {
    const coord = selectedCoords[i];
    state.feature.updateCoordinate(state.selectedCoordPaths[i], coord[0] + constrainedDelta.lng, coord[1] + constrainedDelta.lat);
  }
};

DirectSelect.clickNoTarget = function () {
  this.changeMode(Constants.modes.SIMPLE_SELECT);
};

DirectSelect.clickInactive = function () {
  this.changeMode(Constants.modes.SIMPLE_SELECT);
};

DirectSelect.clickActiveFeature = function (state) {
  state.selectedCoordPaths = [];
  this.clearSelectedCoordinates();
  state.feature.changed();
}; // EXTERNAL FUNCTIONS


DirectSelect.onSetup = function (opts) {
  const featureId = opts.featureId;
  const feature = this.getFeature(featureId);

  if (!feature) {
    throw new Error('You must provide a featureId to enter direct_select mode');
  }

  if (feature.type === Constants.geojsonTypes.POINT) {
    throw new TypeError('direct_select mode doesn\'t handle point features');
  }

  const state = {
    featureId,
    feature,
    dragMoveLocation: opts.startPos || null,
    dragMoving: false,
    canDragMove: false,
    selectedCoordPaths: opts.coordPath ? [opts.coordPath] : []
  };
  this.setSelectedCoordinates(this.pathsToCoordinates(featureId, state.selectedCoordPaths));
  this.setSelected(featureId);
  doubleClickZoom.disable(this);
  this.setActionableState({
    trash: true
  });
  return state;
};

DirectSelect.onStop = function () {
  doubleClickZoom.enable(this);
  this.clearSelectedCoordinates();
};

DirectSelect.toDisplayFeatures = function (state, geojson, push) {
  if (state.featureId === geojson.properties.id) {
    geojson.properties.active = Constants.activeStates.ACTIVE;
    push(geojson);
    createSupplementaryPoints(geojson, {
      map: this.map,
      midpoints: true,
      selectedPaths: state.selectedCoordPaths
    }).forEach(push);
  } else {
    geojson.properties.active = Constants.activeStates.INACTIVE;
    push(geojson);
  }

  this.fireActionable(state);
};

DirectSelect.onTrash = function (state) {
  state.selectedCoordPaths.sort().reverse().forEach(id => state.feature.removeCoordinate(id));
  this.fireUpdate();
  state.selectedCoordPaths = [];
  this.clearSelectedCoordinates();
  this.fireActionable(state);

  if (state.feature.isValid() === false) {
    this.deleteFeature([state.featureId]);
    this.changeMode(Constants.modes.SIMPLE_SELECT, {});
  }
};

DirectSelect.onMouseMove = function (state, e) {
  // On mousemove that is not a drag, stop vertex movement.
  const isFeature = CommonSelectors.isActiveFeature(e);
  const onVertex = isVertex(e);
  const noCoords = state.selectedCoordPaths.length === 0;
  if (isFeature && noCoords) this.updateUIClasses({
    mouse: Constants.cursors.MOVE
  });else if (onVertex && !noCoords) this.updateUIClasses({
    mouse: Constants.cursors.MOVE
  });else this.updateUIClasses({
    mouse: Constants.cursors.NONE
  });
  this.stopDragging(state);
};

DirectSelect.onMouseOut = function (state) {
  // As soon as you mouse leaves the canvas, update the feature
  if (state.dragMoving) this.fireUpdate();
};

DirectSelect.onTouchStart = DirectSelect.onMouseDown = function (state, e) {
  if (isVertex(e)) return this.onVertex(state, e);
  if (CommonSelectors.isActiveFeature(e)) return this.onFeature(state, e);
  if (isMidpoint(e)) return this.onMidpoint(state, e);
};

DirectSelect.onDrag = function (state, e) {
  if (state.canDragMove !== true) return;
  state.dragMoving = true;
  e.originalEvent.stopPropagation();
  const delta = {
    lng: e.lngLat.lng - state.dragMoveLocation.lng,
    lat: e.lngLat.lat - state.dragMoveLocation.lat
  };
  if (state.selectedCoordPaths.length > 0) this.dragVertex(state, e, delta);else this.dragFeature(state, e, delta);
  state.dragMoveLocation = e.lngLat;
};

DirectSelect.onClick = function (state, e) {
  if (noTarget(e)) return this.clickNoTarget(state, e);
  if (CommonSelectors.isActiveFeature(e)) return this.clickActiveFeature(state, e);
  if (isInactiveFeature(e)) return this.clickInactive(state, e);
  this.stopDragging(state);
};

DirectSelect.onTap = function (state, e) {
  if (noTarget(e)) return this.clickNoTarget(state, e);
  if (CommonSelectors.isActiveFeature(e)) return this.clickActiveFeature(state, e);
  if (isInactiveFeature(e)) return this.clickInactive(state, e);
};

DirectSelect.onTouchEnd = DirectSelect.onMouseUp = function (state) {
  if (state.dragMoving) {
    this.fireUpdate();
  }

  this.stopDragging(state);
};

module.exports = DirectSelect;

},{"../constants":14,"../lib/common_selectors":21,"../lib/constrain_feature_movement":22,"../lib/create_supplementary_points":24,"../lib/double_click_zoom":26,"../lib/move_features":36}],44:[function(require,module,exports){
const CommonSelectors = require('../lib/common_selectors');

const isEventAtCoordinates = require('../lib/is_event_at_coordinates');

const doubleClickZoom = require('../lib/double_click_zoom');

const Constants = require('../constants');

const createVertex = require('../lib/create_vertex');

const DrawLineString = {};

DrawLineString.onSetup = function (opts) {
  opts = opts || {};
  const featureId = opts.featureId;
  let line, currentVertexPosition;
  let direction = 'forward';

  if (featureId) {
    line = this.getFeature(featureId);

    if (!line) {
      throw new Error('Could not find a feature with the provided featureId');
    }

    let from = opts.from;

    if (from && from.type === 'Feature' && from.geometry && from.geometry.type === 'Point') {
      from = from.geometry;
    }

    if (from && from.type === 'Point' && from.coordinates && from.coordinates.length === 2) {
      from = from.coordinates;
    }

    if (!from || !Array.isArray(from)) {
      throw new Error('Please use the `from` property to indicate which point to continue the line from');
    }

    const lastCoord = line.coordinates.length - 1;

    if (line.coordinates[lastCoord][0] === from[0] && line.coordinates[lastCoord][1] === from[1]) {
      currentVertexPosition = lastCoord + 1; // add one new coordinate to continue from

      line.addCoordinate(currentVertexPosition, ...line.coordinates[lastCoord]);
    } else if (line.coordinates[0][0] === from[0] && line.coordinates[0][1] === from[1]) {
      direction = 'backwards';
      currentVertexPosition = 0; // add one new coordinate to continue from

      line.addCoordinate(currentVertexPosition, ...line.coordinates[0]);
    } else {
      throw new Error('`from` should match the point at either the start or the end of the provided LineString');
    }
  } else {
    line = this.newFeature({
      type: Constants.geojsonTypes.FEATURE,
      properties: {},
      geometry: {
        type: Constants.geojsonTypes.LINE_STRING,
        coordinates: []
      }
    });
    currentVertexPosition = 0;
    this.addFeature(line);
  }

  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);
  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  });
  this.activateUIButton(Constants.types.LINE);
  this.setActionableState({
    trash: true
  });
  return {
    line,
    currentVertexPosition,
    direction
  };
};

DrawLineString.clickAnywhere = function (state, e) {
  if (state.currentVertexPosition > 0 && isEventAtCoordinates(e, state.line.coordinates[state.currentVertexPosition - 1]) || state.direction === 'backwards' && isEventAtCoordinates(e, state.line.coordinates[state.currentVertexPosition + 1])) {
    return this.changeMode(Constants.modes.SIMPLE_SELECT, {
      featureIds: [state.line.id]
    });
  }

  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  });
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);

  if (state.direction === 'forward') {
    state.currentVertexPosition++;
    state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  } else {
    state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
  }
};

DrawLineString.clickOnVertex = function (state) {
  return this.changeMode(Constants.modes.SIMPLE_SELECT, {
    featureIds: [state.line.id]
  });
};

DrawLineString.onMouseMove = function (state, e) {
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);

  if (CommonSelectors.isVertex(e)) {
    this.updateUIClasses({
      mouse: Constants.cursors.POINTER
    });
  }
};

DrawLineString.onTap = DrawLineString.onClick = function (state, e) {
  if (CommonSelectors.isVertex(e)) return this.clickOnVertex(state, e);
  this.clickAnywhere(state, e);
};

DrawLineString.onKeyUp = function (state, e) {
  if (CommonSelectors.isEnterKey(e)) {
    this.changeMode(Constants.modes.SIMPLE_SELECT, {
      featureIds: [state.line.id]
    });
  } else if (CommonSelectors.isEscapeKey(e)) {
    this.deleteFeature([state.line.id], {
      silent: true
    });
    this.changeMode(Constants.modes.SIMPLE_SELECT);
  }
};

DrawLineString.onStop = function (state) {
  doubleClickZoom.enable(this);
  this.activateUIButton(); // check to see if we've deleted this feature

  if (this.getFeature(state.line.id) === undefined) return; //remove last added coordinate

  state.line.removeCoordinate(`${state.currentVertexPosition}`);

  if (state.line.isValid()) {
    this.map.fire(Constants.events.CREATE, {
      features: [state.line.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.line.id], {
      silent: true
    });
    this.changeMode(Constants.modes.SIMPLE_SELECT, {}, {
      silent: true
    });
  }
};

DrawLineString.onTrash = function (state) {
  this.deleteFeature([state.line.id], {
    silent: true
  });
  this.changeMode(Constants.modes.SIMPLE_SELECT);
};

DrawLineString.toDisplayFeatures = function (state, geojson, display) {
  const isActiveLine = geojson.properties.id === state.line.id;
  geojson.properties.active = isActiveLine ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
  if (!isActiveLine) return display(geojson); // Only render the line if it has at least one real coordinate

  if (geojson.geometry.coordinates.length < 2) return;
  geojson.properties.meta = Constants.meta.FEATURE;
  display(createVertex(state.line.id, geojson.geometry.coordinates[state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1], `${state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1}`, false));
  display(geojson);
};

module.exports = DrawLineString;

},{"../constants":14,"../lib/common_selectors":21,"../lib/create_vertex":25,"../lib/double_click_zoom":26,"../lib/is_event_at_coordinates":31}],45:[function(require,module,exports){
const CommonSelectors = require('../lib/common_selectors');

const Constants = require('../constants');

const DrawPoint = {};

DrawPoint.onSetup = function () {
  const point = this.newFeature({
    type: Constants.geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: Constants.geojsonTypes.POINT,
      coordinates: []
    }
  });
  this.addFeature(point);
  this.clearSelectedFeatures();
  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  });
  this.activateUIButton(Constants.types.POINT);
  this.setActionableState({
    trash: true
  });
  return {
    point
  };
};

DrawPoint.stopDrawingAndRemove = function (state) {
  this.deleteFeature([state.point.id], {
    silent: true
  });
  this.changeMode(Constants.modes.SIMPLE_SELECT);
};

DrawPoint.onTap = DrawPoint.onClick = function (state, e) {
  this.updateUIClasses({
    mouse: Constants.cursors.MOVE
  });
  state.point.updateCoordinate('', e.lngLat.lng, e.lngLat.lat);
  this.map.fire(Constants.events.CREATE, {
    features: [state.point.toGeoJSON()]
  });
  this.changeMode(Constants.modes.SIMPLE_SELECT, {
    featureIds: [state.point.id]
  });
};

DrawPoint.onStop = function (state) {
  this.activateUIButton();

  if (!state.point.getCoordinate().length) {
    this.deleteFeature([state.point.id], {
      silent: true
    });
  }
};

DrawPoint.toDisplayFeatures = function (state, geojson, display) {
  // Never render the point we're drawing
  const isActivePoint = geojson.properties.id === state.point.id;
  geojson.properties.active = isActivePoint ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
  if (!isActivePoint) return display(geojson);
};

DrawPoint.onTrash = DrawPoint.stopDrawingAndRemove;

DrawPoint.onKeyUp = function (state, e) {
  if (CommonSelectors.isEscapeKey(e) || CommonSelectors.isEnterKey(e)) {
    return this.stopDrawingAndRemove(state, e);
  }
};

module.exports = DrawPoint;

},{"../constants":14,"../lib/common_selectors":21}],46:[function(require,module,exports){
const CommonSelectors = require('../lib/common_selectors');

const doubleClickZoom = require('../lib/double_click_zoom');

const Constants = require('../constants');

const isEventAtCoordinates = require('../lib/is_event_at_coordinates');

const createVertex = require('../lib/create_vertex');

const DrawPolygon = {};

DrawPolygon.onSetup = function () {
  const polygon = this.newFeature({
    type: Constants.geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: Constants.geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });
  this.addFeature(polygon);
  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);
  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  });
  this.activateUIButton(Constants.types.POLYGON);
  this.setActionableState({
    trash: true
  });
  return {
    polygon,
    currentVertexPosition: 0
  };
};

DrawPolygon.clickAnywhere = function (state, e) {
  if (state.currentVertexPosition > 0 && isEventAtCoordinates(e, state.polygon.coordinates[0][state.currentVertexPosition - 1])) {
    return this.changeMode(Constants.modes.SIMPLE_SELECT, {
      featureIds: [state.polygon.id]
    });
  }

  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  });
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
  state.currentVertexPosition++;
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
};

DrawPolygon.clickOnVertex = function (state) {
  return this.changeMode(Constants.modes.SIMPLE_SELECT, {
    featureIds: [state.polygon.id]
  });
};

DrawPolygon.onMouseMove = function (state, e) {
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);

  if (CommonSelectors.isVertex(e)) {
    this.updateUIClasses({
      mouse: Constants.cursors.POINTER
    });
  }
};

DrawPolygon.onTap = DrawPolygon.onClick = function (state, e) {
  if (CommonSelectors.isVertex(e)) return this.clickOnVertex(state, e);
  return this.clickAnywhere(state, e);
};

DrawPolygon.onKeyUp = function (state, e) {
  if (CommonSelectors.isEscapeKey(e)) {
    this.deleteFeature([state.polygon.id], {
      silent: true
    });
    this.changeMode(Constants.modes.SIMPLE_SELECT);
  } else if (CommonSelectors.isEnterKey(e)) {
    this.changeMode(Constants.modes.SIMPLE_SELECT, {
      featureIds: [state.polygon.id]
    });
  }
};

DrawPolygon.onStop = function (state) {
  this.updateUIClasses({
    mouse: Constants.cursors.NONE
  });
  doubleClickZoom.enable(this);
  this.activateUIButton(); // check to see if we've deleted this feature

  if (this.getFeature(state.polygon.id) === undefined) return; //remove last added coordinate

  state.polygon.removeCoordinate(`0.${state.currentVertexPosition}`);

  if (state.polygon.isValid()) {
    this.map.fire(Constants.events.CREATE, {
      features: [state.polygon.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.polygon.id], {
      silent: true
    });
    this.changeMode(Constants.modes.SIMPLE_SELECT, {}, {
      silent: true
    });
  }
};

DrawPolygon.toDisplayFeatures = function (state, geojson, display) {
  const isActivePolygon = geojson.properties.id === state.polygon.id;
  geojson.properties.active = isActivePolygon ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
  if (!isActivePolygon) return display(geojson); // Don't render a polygon until it has two positions
  // (and a 3rd which is just the first repeated)

  if (geojson.geometry.coordinates.length === 0) return;
  const coordinateCount = geojson.geometry.coordinates[0].length; // 2 coordinates after selecting a draw type
  // 3 after creating the first point

  if (coordinateCount < 3) {
    return;
  }

  geojson.properties.meta = Constants.meta.FEATURE;
  display(createVertex(state.polygon.id, geojson.geometry.coordinates[0][0], '0.0', false));

  if (coordinateCount > 3) {
    // Add a start position marker to the map, clicking on this will finish the feature
    // This should only be shown when we're in a valid spot
    const endPos = geojson.geometry.coordinates[0].length - 3;
    display(createVertex(state.polygon.id, geojson.geometry.coordinates[0][endPos], `0.${endPos}`, false));
  }

  if (coordinateCount <= 4) {
    // If we've only drawn two positions (plus the closer),
    // make a LineString instead of a Polygon
    const lineCoordinates = [[geojson.geometry.coordinates[0][0][0], geojson.geometry.coordinates[0][0][1]], [geojson.geometry.coordinates[0][1][0], geojson.geometry.coordinates[0][1][1]]]; // create an initial vertex so that we can track the first point on mobile devices

    display({
      type: Constants.geojsonTypes.FEATURE,
      properties: geojson.properties,
      geometry: {
        coordinates: lineCoordinates,
        type: Constants.geojsonTypes.LINE_STRING
      }
    });

    if (coordinateCount === 3) {
      return;
    }
  } // render the Polygon


  return display(geojson);
};

DrawPolygon.onTrash = function (state) {
  this.deleteFeature([state.polygon.id], {
    silent: true
  });
  this.changeMode(Constants.modes.SIMPLE_SELECT);
};

module.exports = DrawPolygon;

},{"../constants":14,"../lib/common_selectors":21,"../lib/create_vertex":25,"../lib/double_click_zoom":26,"../lib/is_event_at_coordinates":31}],47:[function(require,module,exports){
module.exports = {
  simple_select: require('./simple_select'),
  direct_select: require('./direct_select'),
  draw_point: require('./draw_point'),
  draw_polygon: require('./draw_polygon'),
  draw_line_string: require('./draw_line_string')
};

},{"./direct_select":43,"./draw_line_string":44,"./draw_point":45,"./draw_polygon":46,"./simple_select":51}],48:[function(require,module,exports){
const ModeInterface = module.exports = require('./mode_interface_accessors');
/**
 * Triggered while a mode is being transitioned into.
 * @param opts {Object} - this is the object passed via `draw.changeMode('mode', opts)`;
 * @name MODE.onSetup
 * @returns {Object} - this object will be passed to all other life cycle functions
 */


ModeInterface.prototype.onSetup = function () {};
/**
 * Triggered when a drag event is detected on the map
 * @name MODE.onDrag
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onDrag = function () {};
/**
 * Triggered when the mouse is clicked
 * @name MODE.onClick
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onClick = function () {};
/**
 * Triggered with the mouse is moved
 * @name MODE.onMouseMove
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onMouseMove = function () {};
/**
 * Triggered when the mouse button is pressed down
 * @name MODE.onMouseDown
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onMouseDown = function () {};
/**
 * Triggered when the mouse button is released
 * @name MODE.onMouseUp
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onMouseUp = function () {};
/**
 * Triggered when the mouse leaves the map's container
 * @name MODE.onMouseOut
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onMouseOut = function () {};
/**
 * Triggered when a key up event is detected
 * @name MODE.onKeyUp
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onKeyUp = function () {};
/**
 * Triggered when a key down event is detected
 * @name MODE.onKeyDown
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onKeyDown = function () {};
/**
 * Triggered when a touch event is started
 * @name MODE.onTouchStart
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onTouchStart = function () {};
/**
 * Triggered when one drags thier finger on a mobile device
 * @name MODE.onTouchMove
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onTouchMove = function () {};
/**
 * Triggered when one removes their finger from the map
 * @name MODE.onTouchEnd
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onTouchEnd = function () {};
/**
 * Triggered when one quicly taps the map
 * @name MODE.onTap
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */


ModeInterface.prototype.onTap = function () {};
/**
 * Triggered when the mode is being exited, to be used for cleaning up artifacts such as invalid features
 * @name MODE.onStop
 * @param state {Object} - a mutible state object created by onSetup
 */


ModeInterface.prototype.onStop = function () {};
/**
 * Triggered when [draw.trash()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#trash-draw) is called.
 * @name MODE.onTrash
 * @param state {Object} - a mutible state object created by onSetup
 */


ModeInterface.prototype.onTrash = function () {};
/**
 * Triggered when [draw.combineFeatures()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#combinefeatures-draw) is called.
 * @name MODE.onCombineFeature
 * @param state {Object} - a mutible state object created by onSetup
 */


ModeInterface.prototype.onCombineFeature = function () {};
/**
 * Triggered when [draw.uncombineFeatures()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#uncombinefeatures-draw) is called.
 * @name MODE.onUncombineFeature
 * @param state {Object} - a mutible state object created by onSetup
 */


ModeInterface.prototype.onUncombineFeature = function () {};
/**
 * Triggered per feature on render to convert raw features into set of features for display on the map
 * See [styling draw](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#styling-draw) for information about what geojson properties Draw uses as part of rendering.
 * @name MODE.toDisplayFeatures
 * @param state {Object} - a mutible state object created by onSetup
 * @param geojson {Object} - a geojson being evaulated. To render, pass to `display`.
 * @param display {Function} - all geojson objects passed to this be rendered onto the map
 */


ModeInterface.prototype.toDisplayFeatures = function () {
  throw new Error('You must overwrite toDisplayFeatures');
};

},{"./mode_interface_accessors":49}],49:[function(require,module,exports){
const Constants = require('../constants');

const featuresAt = require('../lib/features_at');

const Point = require('../feature_types/point');

const LineString = require('../feature_types/line_string');

const Polygon = require('../feature_types/polygon');

const MultiFeature = require('../feature_types/multi_feature');

const ModeInterface = module.exports = function (ctx) {
  this.map = ctx.map;
  this.drawConfig = JSON.parse(JSON.stringify(ctx.options || {}));
  this._ctx = ctx;
};
/**
 * Sets Draw's interal selected state
 * @name this.setSelected
 * @param {DrawFeature[]} - whats selected as a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 */


ModeInterface.prototype.setSelected = function (features) {
  return this._ctx.store.setSelected(features);
};
/**
 * Sets Draw's internal selected coordinate state
 * @name this.setSelectedCoordinates
 * @param {Object[]} coords - a array of {coord_path: 'string', featureId: 'string'}
 */


ModeInterface.prototype.setSelectedCoordinates = function (coords) {
  this._ctx.store.setSelectedCoordinates(coords);

  coords.reduce((m, c) => {
    if (m[c.feature_id] === undefined) {
      m[c.feature_id] = true;

      this._ctx.store.get(c.feature_id).changed();
    }

    return m;
  }, {});
};
/**
 * Get all selected features as a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 * @name this.getSelected
 * @returns {DrawFeature[]}
 */


ModeInterface.prototype.getSelected = function () {
  return this._ctx.store.getSelected();
};
/**
 * Get the ids of all currently selected features
 * @name this.getSelectedIds
 * @returns {String[]}
 */


ModeInterface.prototype.getSelectedIds = function () {
  return this._ctx.store.getSelectedIds();
};
/**
 * Check if a feature is selected
 * @name this.isSelected
 * @param {String} id - a feature id
 * @returns {Boolean}
 */


ModeInterface.prototype.isSelected = function (id) {
  return this._ctx.store.isSelected(id);
};
/**
 * Get a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) by its id
 * @name this.getFeature
 * @param {String} id - a feature id
 * @returns {DrawFeature}
 */


ModeInterface.prototype.getFeature = function (id) {
  return this._ctx.store.get(id);
};
/**
 * Add a feature to draw's internal selected state
 * @name this.select
 * @param {String} id
 */


ModeInterface.prototype.select = function (id) {
  return this._ctx.store.select(id);
};
/**
 * Remove a feature from draw's internal selected state
 * @name this.delete
 * @param {String} id
 */


ModeInterface.prototype.deselect = function (id) {
  return this._ctx.store.deselect(id);
};
/**
 * Delete a feature from draw
 * @name this.deleteFeature
 * @param {String} id - a feature id
 */


ModeInterface.prototype.deleteFeature = function (id, opts = {}) {
  return this._ctx.store.delete(id, opts);
};
/**
 * Add a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) to draw.
 * See `this.newFeature` for converting geojson into a DrawFeature
 * @name this.addFeature
 * @param {DrawFeature} feature - the feature to add
 */


ModeInterface.prototype.addFeature = function (feature) {
  return this._ctx.store.add(feature);
};
/**
 * Clear all selected features
 */


ModeInterface.prototype.clearSelectedFeatures = function () {
  return this._ctx.store.clearSelected();
};
/**
 * Clear all selected coordinates
 */


ModeInterface.prototype.clearSelectedCoordinates = function () {
  return this._ctx.store.clearSelectedCoordinates();
};
/**
 * Indicate if the different action are currently possible with your mode
 * See [draw.actionalbe](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#drawactionable) for a list of possible actions. All undefined actions are set to **false** by default
 * @name this.setActionableState
 * @param {Object} actions
 */


ModeInterface.prototype.setActionableState = function (actions = {}) {
  const newSet = {
    trash: actions.trash || false,
    combineFeatures: actions.combineFeatures || false,
    uncombineFeatures: actions.uncombineFeatures || false
  };
  return this._ctx.events.actionable(newSet);
};
/**
 * Trigger a mode change
 * @name this.changeMode
 * @param {String} mode - the mode to transition into
 * @param {Object} opts - the options object to pass to the new mode
 * @param {Object} eventOpts - used to control what kind of events are emitted.
 */


ModeInterface.prototype.changeMode = function (mode, opts = {}, eventOpts = {}) {
  return this._ctx.events.changeMode(mode, opts, eventOpts);
};
/**
 * Update the state of draw map classes
 * @name this.updateUIClasses
 * @param {Object} opts
 */


ModeInterface.prototype.updateUIClasses = function (opts) {
  return this._ctx.ui.queueMapClasses(opts);
};
/**
 * If a name is provided it makes that button active, else if makes all buttons inactive
 * @name this.activateUIButton
 * @param {String?} name - name of the button to make active, leave as undefined to set buttons to be inactive
 */


ModeInterface.prototype.activateUIButton = function (name) {
  return this._ctx.ui.setActiveButton(name);
};
/**
 * Get the features at the location of an event object or in a bbox
 * @name this.featuresAt
 * @param {Event||NULL} event - a mapbox-gl event object
 * @param {BBOX||NULL} bbox - the area to get features from
 * @param {String} bufferType - is this `click` or `tap` event, defaults to click
 */


ModeInterface.prototype.featuresAt = function (event, bbox, bufferType = 'click') {
  if (bufferType !== 'click' && bufferType !== 'touch') throw new Error('invalid buffer type');
  return featuresAt[bufferType](event, bbox, this._ctx);
};
/**
 * Create a new [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) from geojson
 * @name this.newFeature
 * @param {GeoJSONFeature} geojson
 * @returns {DrawFeature}
 */


ModeInterface.prototype.newFeature = function (geojson) {
  const type = geojson.geometry.type;
  if (type === Constants.geojsonTypes.POINT) return new Point(this._ctx, geojson);
  if (type === Constants.geojsonTypes.LINE_STRING) return new LineString(this._ctx, geojson);
  if (type === Constants.geojsonTypes.POLYGON) return new Polygon(this._ctx, geojson);
  return new MultiFeature(this._ctx, geojson);
};
/**
 * Check is an object is an instance of a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 * @name this.isInstanceOf
 * @param {String} type - `Point`, `LineString`, `Polygon`, `MultiFeature`
 * @param {Object} feature - the object that needs to be checked
 * @returns {Boolean}
 */


ModeInterface.prototype.isInstanceOf = function (type, feature) {
  if (type === Constants.geojsonTypes.POINT) return feature instanceof Point;
  if (type === Constants.geojsonTypes.LINE_STRING) return feature instanceof LineString;
  if (type === Constants.geojsonTypes.POLYGON) return feature instanceof Polygon;
  if (type === 'MultiFeature') return feature instanceof MultiFeature;
  throw new Error(`Unknown feature class: ${type}`);
};
/**
 * Force draw to rerender the feature of the provided id
 * @name this.doRender
 * @param {String} id - a feature id
 */


ModeInterface.prototype.doRender = function (id) {
  return this._ctx.store.featureChanged(id);
};

},{"../constants":14,"../feature_types/line_string":17,"../feature_types/multi_feature":18,"../feature_types/point":19,"../feature_types/polygon":20,"../lib/features_at":28}],50:[function(require,module,exports){
const ModeInterface = require('./mode_interface');

const eventMapper = {
  drag: 'onDrag',
  click: 'onClick',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseout: 'onMouseOut',
  keyup: 'onKeyUp',
  keydown: 'onKeyDown',
  touchstart: 'onTouchStart',
  touchmove: 'onTouchMove',
  touchend: 'onTouchEnd',
  tap: 'onTap'
};
const eventKeys = Object.keys(eventMapper);

module.exports = function (modeObject) {
  const modeObjectKeys = Object.keys(modeObject);
  return function (ctx, startOpts = {}) {
    let state = {};
    const mode = modeObjectKeys.reduce((m, k) => {
      m[k] = modeObject[k];
      return m;
    }, new ModeInterface(ctx));

    function wrapper(eh) {
      return function (e) {
        mode[eh](state, e);
      };
    }

    return {
      start: function () {
        state = mode.onSetup(startOpts); // this should set ui buttons
        // Adds event handlers for all event options
        // add sets the selector to false for all
        // handlers that are not present in the mode
        // to reduce on render calls for functions that
        // have no logic

        eventKeys.forEach(key => {
          const modeHandler = eventMapper[key];

          let selector = () => false;

          if (modeObject[modeHandler]) {
            selector = () => true;
          }

          this.on(key, selector, wrapper(modeHandler));
        });
      },
      stop: function () {
        mode.onStop(state);
      },
      trash: function () {
        mode.onTrash(state);
      },
      combineFeatures: function () {
        mode.onCombineFeatures(state);
      },
      uncombineFeatures: function () {
        mode.onUncombineFeatures(state);
      },
      render: function (geojson, push) {
        mode.toDisplayFeatures(state, geojson, push);
      }
    };
  };
};

},{"./mode_interface":48}],51:[function(require,module,exports){
const CommonSelectors = require('../lib/common_selectors');

const mouseEventPoint = require('../lib/mouse_event_point');

const createSupplementaryPoints = require('../lib/create_supplementary_points');

const StringSet = require('../lib/string_set');

const doubleClickZoom = require('../lib/double_click_zoom');

const moveFeatures = require('../lib/move_features');

const Constants = require('../constants');

const SimpleSelect = {};

SimpleSelect.onSetup = function (opts) {
  // turn the opts into state.
  const state = {
    dragMoveLocation: null,
    boxSelectStartLocation: null,
    boxSelectElement: undefined,
    boxSelecting: false,
    canBoxSelect: false,
    dragMoveing: false,
    canDragMove: false,
    initiallySelectedFeatureIds: opts.featureIds || []
  };
  this.setSelected(state.initiallySelectedFeatureIds.filter(id => {
    return this.getFeature(id) !== undefined;
  }));
  this.fireActionable();
  this.setActionableState({
    combineFeatures: true,
    uncombineFeatures: true,
    trash: true
  });
  return state;
};

SimpleSelect.fireUpdate = function () {
  this.map.fire(Constants.events.UPDATE, {
    action: Constants.updateActions.MOVE,
    features: this.getSelected().map(f => f.toGeoJSON())
  });
};

SimpleSelect.fireActionable = function () {
  const selectedFeatures = this.getSelected();
  const multiFeatures = selectedFeatures.filter(feature => this.isInstanceOf('MultiFeature', feature));
  let combineFeatures = false;

  if (selectedFeatures.length > 1) {
    combineFeatures = true;
    const featureType = selectedFeatures[0].type.replace('Multi', '');
    selectedFeatures.forEach(feature => {
      if (feature.type.replace('Multi', '') !== featureType) {
        combineFeatures = false;
      }
    });
  }

  const uncombineFeatures = multiFeatures.length > 0;
  const trash = selectedFeatures.length > 0;
  this.setActionableState({
    combineFeatures,
    uncombineFeatures,
    trash
  });
};

SimpleSelect.getUniqueIds = function (allFeatures) {
  if (!allFeatures.length) return [];
  const ids = allFeatures.map(s => s.properties.id).filter(id => id !== undefined).reduce((memo, id) => {
    memo.add(id);
    return memo;
  }, new StringSet());
  return ids.values();
};

SimpleSelect.stopExtendedInteractions = function (state) {
  if (state.boxSelectElement) {
    if (state.boxSelectElement.parentNode) state.boxSelectElement.parentNode.removeChild(state.boxSelectElement);
    state.boxSelectElement = null;
  }

  this.map.dragPan.enable();
  state.boxSelecting = false;
  state.canBoxSelect = false;
  state.dragMoving = false;
  state.canDragMove = false;
};

SimpleSelect.onStop = function () {
  doubleClickZoom.enable(this);
};

SimpleSelect.onMouseMove = function (state) {
  // On mousemove that is not a drag, stop extended interactions.
  // This is useful if you drag off the canvas, release the button,
  // then move the mouse back over the canvas --- we don't allow the
  // interaction to continue then, but we do let it continue if you held
  // the mouse button that whole time
  return this.stopExtendedInteractions(state);
};

SimpleSelect.onMouseOut = function (state) {
  // As soon as you mouse leaves the canvas, update the feature
  if (state.dragMoving) return this.fireUpdate();
};

SimpleSelect.onTap = SimpleSelect.onClick = function (state, e) {
  // Click (with or without shift) on no feature
  if (CommonSelectors.noTarget(e)) return this.clickAnywhere(state, e); // also tap

  if (CommonSelectors.isOfMetaType(Constants.meta.VERTEX)(e)) return this.clickOnVertex(state, e); //tap

  if (CommonSelectors.isFeature(e)) return this.clickOnFeature(state, e);
};

SimpleSelect.clickAnywhere = function (state) {
  // Clear the re-render selection
  const wasSelected = this.getSelectedIds();

  if (wasSelected.length) {
    this.clearSelectedFeatures();
    wasSelected.forEach(id => this.doRender(id));
  }

  doubleClickZoom.enable(this);
  this.stopExtendedInteractions(state);
};

SimpleSelect.clickOnVertex = function (state, e) {
  // Enter direct select mode
  this.changeMode(Constants.modes.DIRECT_SELECT, {
    featureId: e.featureTarget.properties.parent,
    coordPath: e.featureTarget.properties.coord_path,
    startPos: e.lngLat
  });
  this.updateUIClasses({
    mouse: Constants.cursors.MOVE
  });
};

SimpleSelect.startOnActiveFeature = function (state, e) {
  // Stop any already-underway extended interactions
  this.stopExtendedInteractions(state); // Disable map.dragPan immediately so it can't start

  this.map.dragPan.disable(); // Re-render it and enable drag move

  this.doRender(e.featureTarget.properties.id); // Set up the state for drag moving

  state.canDragMove = true;
  state.dragMoveLocation = e.lngLat;
};

SimpleSelect.clickOnFeature = function (state, e) {
  // Stop everything
  doubleClickZoom.disable(this);
  this.stopExtendedInteractions(state);
  const isShiftClick = CommonSelectors.isShiftDown(e);
  const selectedFeatureIds = this.getSelectedIds();
  const featureId = e.featureTarget.properties.id;
  const isFeatureSelected = this.isSelected(featureId); // Click (without shift) on any selected feature but a point

  if (!isShiftClick && isFeatureSelected && this.getFeature(featureId).type !== Constants.geojsonTypes.POINT) {
    // Enter direct select mode
    return this.changeMode(Constants.modes.DIRECT_SELECT, {
      featureId: featureId
    });
  } // Shift-click on a selected feature


  if (isFeatureSelected && isShiftClick) {
    // Deselect it
    this.deselect(featureId);
    this.updateUIClasses({
      mouse: Constants.cursors.POINTER
    });

    if (selectedFeatureIds.length === 1) {
      doubleClickZoom.enable(this);
    } // Shift-click on an unselected feature

  } else if (!isFeatureSelected && isShiftClick) {
    // Add it to the selection
    this.select(featureId);
    this.updateUIClasses({
      mouse: Constants.cursors.MOVE
    }); // Click (without shift) on an unselected feature
  } else if (!isFeatureSelected && !isShiftClick) {
    // Make it the only selected feature
    selectedFeatureIds.forEach(id => this.doRender(id));
    this.setSelected(featureId);
    this.updateUIClasses({
      mouse: Constants.cursors.MOVE
    });
  } // No matter what, re-render the clicked feature


  this.doRender(featureId);
};

SimpleSelect.onMouseDown = function (state, e) {
  if (CommonSelectors.isActiveFeature(e)) return this.startOnActiveFeature(state, e);
  if (this.drawConfig.boxSelect && CommonSelectors.isShiftMousedown(e)) return this.startBoxSelect(state, e);
};

SimpleSelect.startBoxSelect = function (state, e) {
  this.stopExtendedInteractions(state);
  this.map.dragPan.disable(); // Enable box select

  state.boxSelectStartLocation = mouseEventPoint(e.originalEvent, this.map.getContainer());
  state.canBoxSelect = true;
};

SimpleSelect.onTouchStart = function (state, e) {
  if (CommonSelectors.isActiveFeature(e)) return this.startOnActiveFeature(state, e);
};

SimpleSelect.onDrag = function (state, e) {
  if (state.canDragMove) return this.dragMove(state, e);
  if (this.drawConfig.boxSelect && state.canBoxSelect) return this.whileBoxSelect(state, e);
};

SimpleSelect.whileBoxSelect = function (state, e) {
  state.boxSelecting = true;
  this.updateUIClasses({
    mouse: Constants.cursors.ADD
  }); // Create the box node if it doesn't exist

  if (!state.boxSelectElement) {
    state.boxSelectElement = document.createElement('div');
    state.boxSelectElement.classList.add(Constants.classes.BOX_SELECT);
    this.map.getContainer().appendChild(state.boxSelectElement);
  } // Adjust the box node's width and xy position


  const current = mouseEventPoint(e.originalEvent, this.map.getContainer());
  const minX = Math.min(state.boxSelectStartLocation.x, current.x);
  const maxX = Math.max(state.boxSelectStartLocation.x, current.x);
  const minY = Math.min(state.boxSelectStartLocation.y, current.y);
  const maxY = Math.max(state.boxSelectStartLocation.y, current.y);
  const translateValue = `translate(${minX}px, ${minY}px)`;
  state.boxSelectElement.style.transform = translateValue;
  state.boxSelectElement.style.WebkitTransform = translateValue;
  state.boxSelectElement.style.width = `${maxX - minX}px`;
  state.boxSelectElement.style.height = `${maxY - minY}px`;
};

SimpleSelect.dragMove = function (state, e) {
  // Dragging when drag move is enabled
  state.dragMoving = true;
  e.originalEvent.stopPropagation();
  const delta = {
    lng: e.lngLat.lng - state.dragMoveLocation.lng,
    lat: e.lngLat.lat - state.dragMoveLocation.lat
  };
  moveFeatures(this.getSelected(), delta);
  state.dragMoveLocation = e.lngLat;
};

SimpleSelect.onMouseUp = function (state, e) {
  // End any extended interactions
  if (state.dragMoving) {
    this.fireUpdate();
  } else if (state.boxSelecting) {
    const bbox = [state.boxSelectStartLocation, mouseEventPoint(e.originalEvent, this.map.getContainer())];
    const featuresInBox = this.featuresAt(null, bbox, 'click');
    const idsToSelect = this.getUniqueIds(featuresInBox).filter(id => !this.isSelected(id));

    if (idsToSelect.length) {
      this.select(idsToSelect);
      idsToSelect.forEach(id => this.doRender(id));
      this.updateUIClasses({
        mouse: Constants.cursors.MOVE
      });
    }
  }

  this.stopExtendedInteractions(state);
};

SimpleSelect.toDisplayFeatures = function (state, geojson, display) {
  geojson.properties.active = this.isSelected(geojson.properties.id) ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
  display(geojson);
  this.fireActionable();
  if (geojson.properties.active !== Constants.activeStates.ACTIVE || geojson.geometry.type === Constants.geojsonTypes.POINT) return;
  createSupplementaryPoints(geojson).forEach(display);
};

SimpleSelect.onTrash = function () {
  this.deleteFeature(this.getSelectedIds());
  this.fireActionable();
};

SimpleSelect.onCombineFeatures = function () {
  const selectedFeatures = this.getSelected();
  if (selectedFeatures.length === 0 || selectedFeatures.length < 2) return;
  const coordinates = [],
        featuresCombined = [];
  const featureType = selectedFeatures[0].type.replace('Multi', '');

  for (let i = 0; i < selectedFeatures.length; i++) {
    const feature = selectedFeatures[i];

    if (feature.type.replace('Multi', '') !== featureType) {
      return;
    }

    if (feature.type.includes('Multi')) {
      feature.getCoordinates().forEach(subcoords => {
        coordinates.push(subcoords);
      });
    } else {
      coordinates.push(feature.getCoordinates());
    }

    featuresCombined.push(feature.toGeoJSON());
  }

  if (featuresCombined.length > 1) {
    const multiFeature = this.newFeature({
      type: Constants.geojsonTypes.FEATURE,
      properties: featuresCombined[0].properties,
      geometry: {
        type: `Multi${featureType}`,
        coordinates: coordinates
      }
    });
    this.addFeature(multiFeature);
    this.deleteFeature(this.getSelectedIds(), {
      silent: true
    });
    this.setSelected([multiFeature.id]);
    this.map.fire(Constants.events.COMBINE_FEATURES, {
      createdFeatures: [multiFeature.toGeoJSON()],
      deletedFeatures: featuresCombined
    });
  }

  this.fireActionable();
};

SimpleSelect.onUncombineFeatures = function () {
  const selectedFeatures = this.getSelected();
  if (selectedFeatures.length === 0) return;
  const createdFeatures = [];
  const featuresUncombined = [];

  for (let i = 0; i < selectedFeatures.length; i++) {
    const feature = selectedFeatures[i];

    if (this.isInstanceOf('MultiFeature', feature)) {
      feature.getFeatures().forEach(subFeature => {
        this.addFeature(subFeature);
        subFeature.properties = feature.properties;
        createdFeatures.push(subFeature.toGeoJSON());
        this.select([subFeature.id]);
      });
      this.deleteFeature(feature.id, {
        silent: true
      });
      featuresUncombined.push(feature.toGeoJSON());
    }
  }

  if (createdFeatures.length > 1) {
    this.map.fire(Constants.events.UNCOMBINE_FEATURES, {
      createdFeatures: createdFeatures,
      deletedFeatures: featuresUncombined
    });
  }

  this.fireActionable();
};

module.exports = SimpleSelect;

},{"../constants":14,"../lib/common_selectors":21,"../lib/create_supplementary_points":24,"../lib/double_click_zoom":26,"../lib/mouse_event_point":35,"../lib/move_features":36,"../lib/string_set":38}],52:[function(require,module,exports){
const xtend = require('xtend');

const Constants = require('./constants');

const defaultOptions = {
  defaultMode: Constants.modes.SIMPLE_SELECT,
  keybindings: true,
  touchEnabled: true,
  clickBuffer: 2,
  touchBuffer: 25,
  boxSelect: true,
  displayControlsDefault: true,
  styles: require('./lib/theme'),
  modes: require('./modes'),
  controls: {},
  userProperties: false
};
const showControls = {
  point: true,
  line_string: true,
  polygon: true,
  trash: true,
  combine_features: true,
  uncombine_features: true
};
const hideControls = {
  point: false,
  line_string: false,
  polygon: false,
  trash: false,
  combine_features: false,
  uncombine_features: false
};

function addSources(styles, sourceBucket) {
  return styles.map(style => {
    if (style.source) return style;
    return xtend(style, {
      id: `${style.id}.${sourceBucket}`,
      source: sourceBucket === 'hot' ? Constants.sources.HOT : Constants.sources.COLD
    });
  });
}

module.exports = function (options = {}) {
  let withDefaults = xtend(options);

  if (!options.controls) {
    withDefaults.controls = {};
  }

  if (options.displayControlsDefault === false) {
    withDefaults.controls = xtend(hideControls, options.controls);
  } else {
    withDefaults.controls = xtend(showControls, options.controls);
  }

  withDefaults = xtend(defaultOptions, withDefaults); // Layers with a shared source should be adjacent for performance reasons

  withDefaults.styles = addSources(withDefaults.styles, 'cold').concat(addSources(withDefaults.styles, 'hot'));
  return withDefaults;
};

},{"./constants":14,"./lib/theme":40,"./modes":47,"xtend":81}],53:[function(require,module,exports){
const Constants = require('./constants');

module.exports = function render() {
  const store = this;
  const mapExists = store.ctx.map && store.ctx.map.getSource(Constants.sources.HOT) !== undefined;
  if (!mapExists) return cleanup();
  const mode = store.ctx.events.currentModeName();
  store.ctx.ui.queueMapClasses({
    mode
  });
  let newHotIds = [];
  let newColdIds = [];

  if (store.isDirty) {
    newColdIds = store.getAllIds();
  } else {
    newHotIds = store.getChangedIds().filter(id => store.get(id) !== undefined);
    newColdIds = store.sources.hot.filter(geojson => {
      return geojson.properties.id && newHotIds.indexOf(geojson.properties.id) === -1 && store.get(geojson.properties.id) !== undefined;
    }).map(geojson => geojson.properties.id);
  }

  store.sources.hot = [];
  const lastColdCount = store.sources.cold.length;
  store.sources.cold = store.isDirty ? [] : store.sources.cold.filter(geojson => {
    const id = geojson.properties.id || geojson.properties.parent;
    return newHotIds.indexOf(id) === -1;
  });
  const coldChanged = lastColdCount !== store.sources.cold.length || newColdIds.length > 0;
  newHotIds.forEach(id => renderFeature(id, 'hot'));
  newColdIds.forEach(id => renderFeature(id, 'cold'));

  function renderFeature(id, source) {
    const feature = store.get(id);
    const featureInternal = feature.internal(mode);
    store.ctx.events.currentModeRender(featureInternal, geojson => {
      store.sources[source].push(geojson);
    });
  }

  if (coldChanged) {
    store.ctx.map.getSource(Constants.sources.COLD).setData({
      type: Constants.geojsonTypes.FEATURE_COLLECTION,
      features: store.sources.cold
    });
  }

  store.ctx.map.getSource(Constants.sources.HOT).setData({
    type: Constants.geojsonTypes.FEATURE_COLLECTION,
    features: store.sources.hot
  });

  if (store._emitSelectionChange) {
    store.ctx.map.fire(Constants.events.SELECTION_CHANGE, {
      features: store.getSelected().map(feature => feature.toGeoJSON()),
      points: store.getSelectedCoordinates().map(coordinate => {
        return {
          type: Constants.geojsonTypes.FEATURE,
          properties: {},
          geometry: {
            type: Constants.geojsonTypes.POINT,
            coordinates: coordinate.coordinates
          }
        };
      })
    });
    store._emitSelectionChange = false;
  }

  if (store._deletedFeaturesToEmit.length) {
    const geojsonToEmit = store._deletedFeaturesToEmit.map(feature => feature.toGeoJSON());

    store._deletedFeaturesToEmit = [];
    store.ctx.map.fire(Constants.events.DELETE, {
      features: geojsonToEmit
    });
  }

  cleanup();
  store.ctx.map.fire(Constants.events.RENDER, {});

  function cleanup() {
    store.isDirty = false;
    store.clearChangedIds();
  }
};

},{"./constants":14}],54:[function(require,module,exports){
(function (process){
const events = require('./events');

const Store = require('./store');

const ui = require('./ui');

const Constants = require('./constants');

const xtend = require('xtend');

module.exports = function (ctx) {
  let controlContainer = null;
  let mapLoadedInterval = null;
  const setup = {
    onRemove: function () {
      // Stop connect attempt in the event that control is removed before map is loaded
      ctx.map.off('load', setup.connect);
      clearInterval(mapLoadedInterval);
      setup.removeLayers();
      ctx.store.restoreMapConfig();
      ctx.ui.removeButtons();
      ctx.events.removeEventListeners();
      ctx.ui.clearMapClasses();
      ctx.map = null;
      ctx.container = null;
      ctx.store = null;
      if (controlContainer && controlContainer.parentNode) controlContainer.parentNode.removeChild(controlContainer);
      controlContainer = null;
      return this;
    },
    connect: function () {
      ctx.map.off('load', setup.connect);
      clearInterval(mapLoadedInterval);
      setup.addLayers();
      ctx.store.storeMapConfig();
      ctx.events.addEventListeners();
    },
    onAdd: function (map) {
      if (process.env.NODE_ENV !== 'test') {
        // Monkey patch to resolve breaking change to `fire` introduced by
        // mapbox-gl-js. See mapbox/mapbox-gl-draw/issues/766.
        const _fire = map.fire;

        map.fire = function (type, event) {
          let args = arguments;

          if (_fire.length === 1 && arguments.length !== 1) {
            args = [xtend({}, {
              type: type
            }, event)];
          }

          return _fire.apply(map, args);
        };
      }

      ctx.map = map;
      ctx.events = events(ctx);
      ctx.ui = ui(ctx);
      ctx.container = map.getContainer();
      ctx.store = new Store(ctx);
      controlContainer = ctx.ui.addButtons();

      if (ctx.options.boxSelect) {
        map.boxZoom.disable(); // Need to toggle dragPan on and off or else first
        // dragPan disable attempt in simple_select doesn't work

        map.dragPan.disable();
        map.dragPan.enable();
      }

      if (map.loaded()) {
        setup.connect();
      } else {
        map.on('load', setup.connect);
        mapLoadedInterval = setInterval(() => {
          if (map.loaded()) setup.connect();
        }, 16);
      }

      ctx.events.start();
      return controlContainer;
    },
    addLayers: function () {
      // drawn features style
      ctx.map.addSource(Constants.sources.COLD, {
        data: {
          type: Constants.geojsonTypes.FEATURE_COLLECTION,
          features: []
        },
        type: 'geojson'
      }); // hot features style

      ctx.map.addSource(Constants.sources.HOT, {
        data: {
          type: Constants.geojsonTypes.FEATURE_COLLECTION,
          features: []
        },
        type: 'geojson'
      });
      ctx.options.styles.forEach(style => {
        ctx.map.addLayer(style);
      });
      ctx.store.setDirty(true);
      ctx.store.render();
    },
    // Check for layers and sources before attempting to remove
    // If user adds draw control and removes it before the map is loaded, layers and sources will be missing
    removeLayers: function () {
      ctx.options.styles.forEach(style => {
        if (ctx.map.getLayer(style.id)) {
          ctx.map.removeLayer(style.id);
        }
      });

      if (ctx.map.getSource(Constants.sources.COLD)) {
        ctx.map.removeSource(Constants.sources.COLD);
      }

      if (ctx.map.getSource(Constants.sources.HOT)) {
        ctx.map.removeSource(Constants.sources.HOT);
      }
    }
  };
  ctx.setup = setup;
  return setup;
};

}).call(this,require('_process'))

},{"./constants":14,"./events":15,"./store":55,"./ui":56,"_process":78,"xtend":81}],55:[function(require,module,exports){
const throttle = require('./lib/throttle');

const toDenseArray = require('./lib/to_dense_array');

const StringSet = require('./lib/string_set');

const render = require('./render');

const interactions = require('./constants').interactions;

const Store = module.exports = function (ctx) {
  this._features = {};
  this._featureIds = new StringSet();
  this._selectedFeatureIds = new StringSet();
  this._selectedCoordinates = [];
  this._changedFeatureIds = new StringSet();
  this._deletedFeaturesToEmit = [];
  this._emitSelectionChange = false;
  this._mapInitialConfig = {};
  this.ctx = ctx;
  this.sources = {
    hot: [],
    cold: []
  };
  this.render = throttle(render, 16, this);
  this.isDirty = false;
};
/**
 * Delays all rendering until the returned function is invoked
 * @return {Function} renderBatch
 */


Store.prototype.createRenderBatch = function () {
  const holdRender = this.render;
  let numRenders = 0;

  this.render = function () {
    numRenders++;
  };

  return () => {
    this.render = holdRender;

    if (numRenders > 0) {
      this.render();
    }
  };
};
/**
 * Sets the store's state to dirty.
 * @return {Store} this
 */


Store.prototype.setDirty = function () {
  this.isDirty = true;
  return this;
};
/**
 * Sets a feature's state to changed.
 * @param {string} featureId
 * @return {Store} this
 */


Store.prototype.featureChanged = function (featureId) {
  this._changedFeatureIds.add(featureId);

  return this;
};
/**
 * Gets the ids of all features currently in changed state.
 * @return {Store} this
 */


Store.prototype.getChangedIds = function () {
  return this._changedFeatureIds.values();
};
/**
 * Sets all features to unchanged state.
 * @return {Store} this
 */


Store.prototype.clearChangedIds = function () {
  this._changedFeatureIds.clear();

  return this;
};
/**
 * Gets the ids of all features in the store.
 * @return {Store} this
 */


Store.prototype.getAllIds = function () {
  return this._featureIds.values();
};
/**
 * Adds a feature to the store.
 * @param {Object} feature
 *
 * @return {Store} this
 */


Store.prototype.add = function (feature) {
  this.featureChanged(feature.id);
  this._features[feature.id] = feature;

  this._featureIds.add(feature.id);

  return this;
};
/**
 * Deletes a feature or array of features from the store.
 * Cleans up after the deletion by deselecting the features.
 * If changes were made, sets the state to the dirty
 * and fires an event.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */


Store.prototype.delete = function (featureIds, options = {}) {
  toDenseArray(featureIds).forEach(id => {
    if (!this._featureIds.has(id)) return;

    this._featureIds.delete(id);

    this._selectedFeatureIds.delete(id);

    if (!options.silent) {
      if (this._deletedFeaturesToEmit.indexOf(this._features[id]) === -1) {
        this._deletedFeaturesToEmit.push(this._features[id]);
      }
    }

    delete this._features[id];
    this.isDirty = true;
  });
  refreshSelectedCoordinates.call(this, options);
  return this;
};
/**
 * Returns a feature in the store matching the specified value.
 * @return {Object | undefined} feature
 */


Store.prototype.get = function (id) {
  return this._features[id];
};
/**
 * Returns all features in the store.
 * @return {Array<Object>}
 */


Store.prototype.getAll = function () {
  return Object.keys(this._features).map(id => this._features[id]);
};
/**
 * Adds features to the current selection.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */


Store.prototype.select = function (featureIds, options = {}) {
  toDenseArray(featureIds).forEach(id => {
    if (this._selectedFeatureIds.has(id)) return;

    this._selectedFeatureIds.add(id);

    this._changedFeatureIds.add(id);

    if (!options.silent) {
      this._emitSelectionChange = true;
    }
  });
  return this;
};
/**
 * Deletes features from the current selection.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */


Store.prototype.deselect = function (featureIds, options = {}) {
  toDenseArray(featureIds).forEach(id => {
    if (!this._selectedFeatureIds.has(id)) return;

    this._selectedFeatureIds.delete(id);

    this._changedFeatureIds.add(id);

    if (!options.silent) {
      this._emitSelectionChange = true;
    }
  });
  refreshSelectedCoordinates.call(this, options);
  return this;
};
/**
 * Clears the current selection.
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */


Store.prototype.clearSelected = function (options = {}) {
  this.deselect(this._selectedFeatureIds.values(), {
    silent: options.silent
  });
  return this;
};
/**
 * Sets the store's selection, clearing any prior values.
 * If no feature ids are passed, the store is just cleared.
 * @param {string | Array<string> | undefined} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */


Store.prototype.setSelected = function (featureIds, options = {}) {
  featureIds = toDenseArray(featureIds); // Deselect any features not in the new selection

  this.deselect(this._selectedFeatureIds.values().filter(id => {
    return featureIds.indexOf(id) === -1;
  }), {
    silent: options.silent
  }); // Select any features in the new selection that were not already selected

  this.select(featureIds.filter(id => {
    return !this._selectedFeatureIds.has(id);
  }), {
    silent: options.silent
  });
  return this;
};
/**
 * Sets the store's coordinates selection, clearing any prior values.
 * @param {Array<Array<string>>} coordinates
 * @return {Store} this
 */


Store.prototype.setSelectedCoordinates = function (coordinates) {
  this._selectedCoordinates = coordinates;
  this._emitSelectionChange = true;
  return this;
};
/**
 * Clears the current coordinates selection.
 * @param {Object} [options]
 * @return {Store} this
 */


Store.prototype.clearSelectedCoordinates = function () {
  this._selectedCoordinates = [];
  this._emitSelectionChange = true;
  return this;
};
/**
 * Returns the ids of features in the current selection.
 * @return {Array<string>} Selected feature ids.
 */


Store.prototype.getSelectedIds = function () {
  return this._selectedFeatureIds.values();
};
/**
 * Returns features in the current selection.
 * @return {Array<Object>} Selected features.
 */


Store.prototype.getSelected = function () {
  return this._selectedFeatureIds.values().map(id => this.get(id));
};
/**
 * Returns selected coordinates in the currently selected feature.
 * @return {Array<Object>} Selected coordinates.
 */


Store.prototype.getSelectedCoordinates = function () {
  const selected = this._selectedCoordinates.map(coordinate => {
    const feature = this.get(coordinate.feature_id);
    return {
      coordinates: feature.getCoordinate(coordinate.coord_path)
    };
  });

  return selected;
};
/**
 * Indicates whether a feature is selected.
 * @param {string} featureId
 * @return {boolean} `true` if the feature is selected, `false` if not.
 */


Store.prototype.isSelected = function (featureId) {
  return this._selectedFeatureIds.has(featureId);
};
/**
 * Sets a property on the given feature
 * @param {string} featureId
 * @param {string} property property
 * @param {string} property value
*/


Store.prototype.setFeatureProperty = function (featureId, property, value) {
  this.get(featureId).setProperty(property, value);
  this.featureChanged(featureId);
};

function refreshSelectedCoordinates(options) {
  const newSelectedCoordinates = this._selectedCoordinates.filter(point => this._selectedFeatureIds.has(point.feature_id));

  if (this._selectedCoordinates.length !== newSelectedCoordinates.length && !options.silent) {
    this._emitSelectionChange = true;
  }

  this._selectedCoordinates = newSelectedCoordinates;
}
/**
 * Stores the initial config for a map, so that we can set it again after we're done.
*/


Store.prototype.storeMapConfig = function () {
  interactions.forEach(interaction => {
    const interactionSet = this.ctx.map[interaction];

    if (interactionSet) {
      this._mapInitialConfig[interaction] = this.ctx.map[interaction].isEnabled();
    }
  });
};
/**
 * Restores the initial config for a map, ensuring all is well.
*/


Store.prototype.restoreMapConfig = function () {
  Object.keys(this._mapInitialConfig).forEach(key => {
    const value = this._mapInitialConfig[key];

    if (value) {
      this.ctx.map[key].enable();
    } else {
      this.ctx.map[key].disable();
    }
  });
};
/**
 * Returns the initial state of an interaction setting.
 * @param {string} interaction
 * @return {boolean} `true` if the interaction is enabled, `false` if not.
 * Defaults to `true`. (Todo: include defaults.)
*/


Store.prototype.getInitialConfigValue = function (interaction) {
  if (this._mapInitialConfig[interaction] !== undefined) {
    return this._mapInitialConfig[interaction];
  } else {
    // This needs to be set to whatever the default is for that interaction
    // It seems to be true for all cases currently, so let's send back `true`.
    return true;
  }
};

},{"./constants":14,"./lib/string_set":38,"./lib/throttle":41,"./lib/to_dense_array":42,"./render":53}],56:[function(require,module,exports){
const xtend = require('xtend');

const Constants = require('./constants');

const classTypes = ['mode', 'feature', 'mouse'];

module.exports = function (ctx) {
  const buttonElements = {};
  let activeButton = null;
  let currentMapClasses = {
    mode: null,
    // e.g. mode-direct_select
    feature: null,
    // e.g. feature-vertex
    mouse: null // e.g. mouse-move

  };
  let nextMapClasses = {
    mode: null,
    feature: null,
    mouse: null
  };

  function clearMapClasses() {
    queueMapClasses({
      mode: null,
      feature: null,
      mouse: null
    });
    updateMapClasses();
  }

  function queueMapClasses(options) {
    nextMapClasses = xtend(nextMapClasses, options);
  }

  function updateMapClasses() {
    if (!ctx.container) return;
    const classesToRemove = [];
    const classesToAdd = [];
    classTypes.forEach(type => {
      if (nextMapClasses[type] === currentMapClasses[type]) return;
      classesToRemove.push(`${type}-${currentMapClasses[type]}`);

      if (nextMapClasses[type] !== null) {
        classesToAdd.push(`${type}-${nextMapClasses[type]}`);
      }
    });

    if (classesToRemove.length > 0) {
      ctx.container.classList.remove.apply(ctx.container.classList, classesToRemove);
    }

    if (classesToAdd.length > 0) {
      ctx.container.classList.add.apply(ctx.container.classList, classesToAdd);
    }

    currentMapClasses = xtend(currentMapClasses, nextMapClasses);
  }

  function createControlButton(id, options = {}) {
    const button = document.createElement('button');
    button.className = `${Constants.classes.CONTROL_BUTTON} ${options.className}`;
    button.setAttribute('title', options.title);
    options.container.appendChild(button);
    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const clickedButton = e.target;

      if (clickedButton === activeButton) {
        deactivateButtons();
        return;
      }

      setActiveButton(id);
      options.onActivate();
    }, true);
    return button;
  }

  function deactivateButtons() {
    if (!activeButton) return;
    activeButton.classList.remove(Constants.classes.ACTIVE_BUTTON);
    activeButton = null;
  }

  function setActiveButton(id) {
    deactivateButtons();
    const button = buttonElements[id];
    if (!button) return;

    if (button && id !== 'trash') {
      button.classList.add(Constants.classes.ACTIVE_BUTTON);
      activeButton = button;
    }
  }

  function addButtons() {
    const controls = ctx.options.controls;
    const controlGroup = document.createElement('div');
    controlGroup.className = `${Constants.classes.CONTROL_GROUP} ${Constants.classes.CONTROL_BASE}`;
    if (!controls) return controlGroup;

    if (controls[Constants.types.LINE]) {
      buttonElements[Constants.types.LINE] = createControlButton(Constants.types.LINE, {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_LINE,
        title: `LineString tool ${ctx.options.keybindings ? '(l)' : ''}`,
        onActivate: () => ctx.events.changeMode(Constants.modes.DRAW_LINE_STRING)
      });
    }

    if (controls[Constants.types.POLYGON]) {
      buttonElements[Constants.types.POLYGON] = createControlButton(Constants.types.POLYGON, {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_POLYGON,
        title: `Polygon tool ${ctx.options.keybindings ? '(p)' : ''}`,
        onActivate: () => ctx.events.changeMode(Constants.modes.DRAW_POLYGON)
      });
    }

    if (controls[Constants.types.POINT]) {
      buttonElements[Constants.types.POINT] = createControlButton(Constants.types.POINT, {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_POINT,
        title: `Marker tool ${ctx.options.keybindings ? '(m)' : ''}`,
        onActivate: () => ctx.events.changeMode(Constants.modes.DRAW_POINT)
      });
    }

    if (controls.trash) {
      buttonElements.trash = createControlButton('trash', {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_TRASH,
        title: 'Delete',
        onActivate: () => {
          ctx.events.trash();
        }
      });
    }

    if (controls.combine_features) {
      buttonElements.combine_features = createControlButton('combineFeatures', {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_COMBINE_FEATURES,
        title: 'Combine',
        onActivate: () => {
          ctx.events.combineFeatures();
        }
      });
    }

    if (controls.uncombine_features) {
      buttonElements.uncombine_features = createControlButton('uncombineFeatures', {
        container: controlGroup,
        className: Constants.classes.CONTROL_BUTTON_UNCOMBINE_FEATURES,
        title: 'Uncombine',
        onActivate: () => {
          ctx.events.uncombineFeatures();
        }
      });
    }

    return controlGroup;
  }

  function removeButtons() {
    Object.keys(buttonElements).forEach(buttonId => {
      const button = buttonElements[buttonId];

      if (button.parentNode) {
        button.parentNode.removeChild(button);
      }

      delete buttonElements[buttonId];
    });
  }

  return {
    setActiveButton,
    queueMapClasses,
    updateMapClasses,
    clearMapClasses,
    addButtons,
    removeButtons
  };
};

},{"./constants":14,"xtend":81}],57:[function(require,module,exports){
'use strict';

module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var destination_1 = require("@turf/destination");
var helpers_1 = require("@turf/helpers");
/**
 * Takes a {@link Point} and calculates the circle polygon given a radius in degrees, radians, miles, or kilometers; and steps for precision.
 *
 * @name circle
 * @param {Feature<Point>|number[]} center center point
 * @param {number} radius radius of the circle
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.steps=64] number of steps
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] properties
 * @returns {Feature<Polygon>} circle polygon
 * @example
 * var center = [-75.343, 39.984];
 * var radius = 5;
 * var options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}};
 * var circle = turf.circle(center, radius, options);
 *
 * //addToMap
 * var addToMap = [turf.point(center), circle]
 */
function circle(center, radius, options) {
    if (options === void 0) { options = {}; }
    // default params
    var steps = options.steps || 64;
    var properties = options.properties ? options.properties : (!Array.isArray(center) && center.type === 'Feature' && center.properties) ? center.properties : {};
    // main
    var coordinates = [];
    for (var i = 0; i < steps; i++) {
        coordinates.push(destination_1.default(center, radius, i * -360 / steps, options).geometry.coordinates);
    }
    coordinates.push(coordinates[0]);
    return helpers_1.polygon([coordinates], properties);
}
exports.default = circle;

},{"@turf/destination":59,"@turf/helpers":61}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// http://en.wikipedia.org/wiki/Haversine_formula
// http://www.movable-type.co.uk/scripts/latlong.html
var helpers_1 = require("@turf/helpers");
var invariant_1 = require("@turf/invariant");
/**
 * Takes a {@link Point} and calculates the location of a destination point given a distance in
 * degrees, radians, miles, or kilometers; and bearing in degrees.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name destination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the origin point
 * @param {number} bearing ranging from -180 to 180
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] Translate properties to Point
 * @returns {Feature<Point>} destination point
 * @example
 * var point = turf.point([-75.343, 39.984]);
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.destination(point, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [point, destination]
 * destination.properties['marker-color'] = '#f00';
 * point.properties['marker-color'] = '#0f0';
 */
function destination(origin, distance, bearing, options) {
    if (options === void 0) { options = {}; }
    // Handle input
    var coordinates1 = invariant_1.getCoord(origin);
    var longitude1 = helpers_1.degreesToRadians(coordinates1[0]);
    var latitude1 = helpers_1.degreesToRadians(coordinates1[1]);
    var bearingRad = helpers_1.degreesToRadians(bearing);
    var radians = helpers_1.lengthToRadians(distance, options.units);
    // Main
    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) +
        Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad));
    var longitude2 = longitude1 + Math.atan2(Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    var lng = helpers_1.radiansToDegrees(longitude2);
    var lat = helpers_1.radiansToDegrees(latitude2);
    return helpers_1.point([lng, lat], options.properties);
}
exports.default = destination;

},{"@turf/helpers":61,"@turf/invariant":62}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invariant_1 = require("@turf/invariant");
var helpers_1 = require("@turf/helpers");
//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord} from origin point
 * @param {Coord} to destination point
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function distance(from, to, options) {
    if (options === void 0) { options = {}; }
    var coordinates1 = invariant_1.getCoord(from);
    var coordinates2 = invariant_1.getCoord(to);
    var dLat = helpers_1.degreesToRadians((coordinates2[1] - coordinates1[1]));
    var dLon = helpers_1.degreesToRadians((coordinates2[0] - coordinates1[0]));
    var lat1 = helpers_1.degreesToRadians(coordinates1[1]);
    var lat2 = helpers_1.degreesToRadians(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return helpers_1.radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
exports.default = distance;

},{"@turf/helpers":61,"@turf/invariant":62}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
exports.earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.factors = {
    centimeters: exports.earthRadius * 100,
    centimetres: exports.earthRadius * 100,
    degrees: exports.earthRadius / 111325,
    feet: exports.earthRadius * 3.28084,
    inches: exports.earthRadius * 39.370,
    kilometers: exports.earthRadius / 1000,
    kilometres: exports.earthRadius / 1000,
    meters: exports.earthRadius,
    metres: exports.earthRadius,
    miles: exports.earthRadius / 1609.344,
    millimeters: exports.earthRadius * 1000,
    millimetres: exports.earthRadius * 1000,
    nauticalmiles: exports.earthRadius / 1852,
    radians: 1,
    yards: exports.earthRadius / 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.370,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / exports.earthRadius,
    yards: 1 / 1.0936,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
exports.feature = feature;
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, options) {
    if (options === void 0) { options = {}; }
    switch (type) {
        case "Point": return point(coordinates).geometry;
        case "LineString": return lineString(coordinates).geometry;
        case "Polygon": return polygon(coordinates).geometry;
        case "MultiPoint": return multiPoint(coordinates).geometry;
        case "MultiLineString": return multiLineString(coordinates).geometry;
        case "MultiPolygon": return multiPolygon(coordinates).geometry;
        default: throw new Error(type + " is invalid");
    }
}
exports.geometry = geometry;
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.point = point;
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
exports.points = points;
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.polygon = polygon;
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
exports.polygons = polygons;
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.lineString = lineString;
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
exports.lineStrings = lineStrings;
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
exports.featureCollection = featureCollection;
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiLineString = multiLineString;
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPoint = multiPoint;
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPolygon = multiPolygon;
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
exports.geometryCollection = geometryCollection;
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
exports.round = round;
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
exports.radiansToLength = radiansToLength;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
exports.lengthToRadians = lengthToRadians;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
exports.lengthToDegrees = lengthToDegrees;
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
exports.bearingToAzimuth = bearingToAzimuth;
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
exports.degreesToRadians = degreesToRadians;
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
exports.convertLength = convertLength;
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = exports.areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = exports.areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
exports.convertArea = convertArea;
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num) && !/^\s*$/.test(num);
}
exports.isNumber = isNumber;
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return (!!input) && (input.constructor === Object);
}
exports.isObject = isObject;
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
exports.validateBBox = validateBBox;
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
exports.validateId = validateId;
// Deprecated methods
function radians2degrees() {
    throw new Error("method has been renamed to `radiansToDegrees`");
}
exports.radians2degrees = radians2degrees;
function degrees2radians() {
    throw new Error("method has been renamed to `degreesToRadians`");
}
exports.degrees2radians = degrees2radians;
function distanceToDegrees() {
    throw new Error("method has been renamed to `lengthToDegrees`");
}
exports.distanceToDegrees = distanceToDegrees;
function distanceToRadians() {
    throw new Error("method has been renamed to `lengthToRadians`");
}
exports.distanceToRadians = distanceToRadians;
function radiansToDistance() {
    throw new Error("method has been renamed to `radiansToLength`");
}
exports.radiansToDistance = radiansToDistance;
function bearingToAngle() {
    throw new Error("method has been renamed to `bearingToAzimuth`");
}
exports.bearingToAngle = bearingToAngle;
function convertDistance() {
    throw new Error("method has been renamed to `convertLength`");
}
exports.convertDistance = convertDistance;

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("@turf/helpers");
/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
exports.getCoord = getCoord;
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
exports.getCoords = getCoords;
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 && helpers_1.isNumber(coordinates[0]) && helpers_1.isNumber(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
exports.containsNumber = containsNumber;
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
    }
}
exports.geojsonType = geojsonType;
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
exports.featureOf = featureOf;
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
        }
    }
}
exports.collectionOf = collectionOf;
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
exports.getGeom = getGeom;
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}
exports.getType = getType;

},{"@turf/helpers":61}],63:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],64:[function(require,module,exports){

},{}],65:[function(require,module,exports){
module.exports=function e(t){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.reduce(function(t,r){return t.concat(e(r))},[]),t;case"Feature":return t.geometry?e(t.geometry).map(function(e){var r={type:"Feature",properties:JSON.parse(JSON.stringify(t.properties)),geometry:e};return void 0!==t.id&&(r.id=t.id),r}):t;case"MultiPoint":return t.coordinates.map(function(e){return{type:"Point",coordinates:e}});case"MultiPolygon":return t.coordinates.map(function(e){return{type:"Polygon",coordinates:e}});case"MultiLineString":return t.coordinates.map(function(e){return{type:"LineString",coordinates:e}});case"GeometryCollection":return t.geometries.map(e).reduce(function(e,t){return e.concat(t)},[]);case"Point":case"Polygon":case"LineString":return[t]}};


},{}],66:[function(require,module,exports){
var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};

},{}],67:[function(require,module,exports){
(function (process){
/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var jsonlint = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,14],$V6=[1,15],$V7=[14,18,22,24],$V8=[18,22],$V9=[22,24];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},
terminals_: {2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},
productions_: [0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 // replace escaped characters with actual character
          this.$ = yytext.replace(/\\(\\|")/g, "$"+"1")
                     .replace(/\\n/g,'\n')
                     .replace(/\\r/g,'\r')
                     .replace(/\\t/g,'\t')
                     .replace(/\\v/g,'\v')
                     .replace(/\\f/g,'\f')
                     .replace(/\\b/g,'\b');
        
break;
case 2:
this.$ = Number(yytext);
break;
case 3:
this.$ = null;
break;
case 4:
this.$ = true;
break;
case 5:
this.$ = false;
break;
case 6:
return this.$ = $$[$0-1];
break;
case 13:
this.$ = {}; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 14: case 19:
this.$ = $$[$0-1]; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 15:
this.$ = [$$[$0-2], $$[$0]];
break;
case 16:
this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
break;
case 17:

            this.$ = $$[$0-2];
            if ($$[$0-2][$$[$0][0]] !== undefined) {
                if (!this.$.__duplicateProperties__) {
                    Object.defineProperty(this.$, '__duplicateProperties__', {
                        value: [],
                        enumerable: false
                    });
                }
                this.$.__duplicateProperties__.push($$[$0][0]);
            }
            $$[$0-2][$$[$0][0]] = $$[$0][1];
        
break;
case 18:
this.$ = []; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 20:
this.$ = [$$[$0]];
break;
case 21:
this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
}
},
table: [{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,12:1,13:2,15:7,16:8,17:$V5,23:$V6},{1:[3]},{14:[1,16]},o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),o($V7,[2,11]),o($V7,[2,12]),o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o([14,18,21,22,24],[2,1]),o($V7,[2,2]),{3:20,4:$V0,18:[1,17],19:18,20:19},{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:23,15:7,16:8,17:$V5,23:$V6,24:[1,21],25:22},{1:[2,6]},o($V7,[2,13]),{18:[1,24],22:[1,25]},o($V8,[2,16]),{21:[1,26]},o($V7,[2,18]),{22:[1,28],24:[1,27]},o($V9,[2,20]),o($V7,[2,14]),{3:20,4:$V0,20:29},{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:30,15:7,16:8,17:$V5,23:$V6},o($V7,[2,19]),{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:31,15:7,16:8,17:$V5,23:$V6},o($V8,[2,17]),o($V8,[2,15]),o($V9,[2,21])],
defaultActions: {16:[2,6]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 6
break;
case 2:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 4
break;
case 3:return 17
break;
case 4:return 18
break;
case 5:return 23
break;
case 6:return 24
break;
case 7:return 22
break;
case 8:return 21
break;
case 9:return 10
break;
case 10:return 11
break;
case 11:return 8
break;
case 12:return 14
break;
case 13:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = jsonlint;
exports.Parser = jsonlint.Parser;
exports.parse = function () { return jsonlint.parse.apply(jsonlint, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
}).call(this,require('_process'))

},{"_process":78,"fs":64,"path":77}],68:[function(require,module,exports){
(function (global){
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleSelectMode = exports.DirectMode = exports.DragCircleMode = exports.CircleMode = void 0;

var CircleMode = require('./lib/modes/CircleMode');

exports.CircleMode = CircleMode;

var DragCircleMode = require('./lib/modes/DragCircleMode');

exports.DragCircleMode = DragCircleMode;

var DirectMode = require('./lib/modes/DirectModeOverride');

exports.DirectMode = DirectMode;

var SimpleSelectMode = require('./lib/modes/SimpleSelectModeOverride');

exports.SimpleSelectMode = SimpleSelectMode;

},{"./lib/modes/CircleMode":70,"./lib/modes/DirectModeOverride":71,"./lib/modes/DragCircleMode":72,"./lib/modes/SimpleSelectModeOverride":73}],70:[function(require,module,exports){
const MapboxDraw = require('@mapbox/mapbox-gl-draw');
const Constants = require('@mapbox/mapbox-gl-draw/src/constants');
const doubleClickZoom = require('@mapbox/mapbox-gl-draw/src/lib/double_click_zoom');
const circle = require('@turf/circle').default;

const CircleMode = {...MapboxDraw.modes.draw_polygon};
const DEFAULT_RADIUS_IN_KM = 2;

CircleMode.onSetup = function(opts) {
  const polygon = this.newFeature({
    type: Constants.geojsonTypes.FEATURE,
    properties: {
      isCircle: true,
      center: []
    },
    geometry: {
      type: Constants.geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });

  this.addFeature(polygon);

  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);
  this.updateUIClasses({ mouse: Constants.cursors.ADD });
  this.activateUIButton(Constants.types.POLYGON);
  this.setActionableState({
    trash: true
  });

  return {
    initialRadiusInKm: opts.initialRadiusInKm || DEFAULT_RADIUS_IN_KM,
    polygon,
    currentVertexPosition: 0
  };
};

CircleMode.clickAnywhere = function(state, e) {
  if (state.currentVertexPosition === 0) {
    state.currentVertexPosition++;
    const center = [e.lngLat.lng, e.lngLat.lat];
    const circleFeature = circle(center, state.initialRadiusInKm);
    state.polygon.incomingCoords(circleFeature.geometry.coordinates);
    state.polygon.properties.center = center;
    state.polygon.properties.radiusInKm = state.initialRadiusInKm;
  }
  return this.changeMode(Constants.modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
};

module.exports = CircleMode;
},{"@mapbox/mapbox-gl-draw":12,"@mapbox/mapbox-gl-draw/src/constants":14,"@mapbox/mapbox-gl-draw/src/lib/double_click_zoom":26,"@turf/circle":58}],71:[function(require,module,exports){
const MapboxDraw = require('@mapbox/mapbox-gl-draw');
const createSupplementaryPoints = require('@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points');
const moveFeatures = require('@mapbox/mapbox-gl-draw/src/lib/move_features');
const Constants = require('@mapbox/mapbox-gl-draw/src/constants');
const constrainFeatureMovement = require('@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement');
const distance = require('@turf/distance').default;
const turfHelpers = require('@turf/helpers');
const circle = require('@turf/circle').default;
const createSupplementaryPointsForCircle = require('../utils/create_supplementary_points_circle');


const DirectModeOverride = MapboxDraw.modes.direct_select;

DirectModeOverride.dragFeature = function(state, e, delta) {
  moveFeatures(this.getSelected(), delta);
  this.getSelected()
    .filter(feature => feature.properties.isCircle)
    .map(circle => circle.properties.center)
    .forEach(center => {
      center[0] += delta.lng;
      center[1] += delta.lat;
    });
  state.dragMoveLocation = e.lngLat;
};

DirectModeOverride.dragVertex = function(state, e, delta) {
  if (state.feature.properties.isCircle) {
    const center = state.feature.properties.center;
    const movedVertex = [e.lngLat.lng, e.lngLat.lat];
    const radius = distance(turfHelpers.point(center), turfHelpers.point(movedVertex), {units: 'kilometers'});
    const circleFeature = circle(center, radius);
    state.feature.incomingCoords(circleFeature.geometry.coordinates);
    state.feature.properties.radiusInKm = radius;
  } else {
    const selectedCoords = state.selectedCoordPaths.map(coord_path => state.feature.getCoordinate(coord_path));
    const selectedCoordPoints = selectedCoords.map(coords => ({
      type: Constants.geojsonTypes.FEATURE,
      properties: {},
      geometry: {
        type: Constants.geojsonTypes.POINT,
        coordinates: coords
      }
    }));

    const constrainedDelta = constrainFeatureMovement(selectedCoordPoints, delta);
    for (let i = 0; i < selectedCoords.length; i++) {
      const coord = selectedCoords[i];
      state.feature.updateCoordinate(state.selectedCoordPaths[i], coord[0] + constrainedDelta.lng, coord[1] + constrainedDelta.lat);
    }
  }
};

DirectModeOverride.toDisplayFeatures = function (state, geojson, push) {
  if (state.featureId === geojson.properties.id) {
    geojson.properties.active = Constants.activeStates.ACTIVE;
    push(geojson);
    const supplementaryPoints = geojson.properties.user_isCircle ? createSupplementaryPointsForCircle(geojson)
      : createSupplementaryPoints(geojson, {
        map: this.map,
        midpoints: true,
        selectedPaths: state.selectedCoordPaths
      });
    supplementaryPoints.forEach(push);
  } else {
    geojson.properties.active = Constants.activeStates.INACTIVE;
    push(geojson);
  }
  this.fireActionable(state);

}

module.exports = DirectModeOverride;
},{"../utils/create_supplementary_points_circle":74,"@mapbox/mapbox-gl-draw":12,"@mapbox/mapbox-gl-draw/src/constants":14,"@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement":22,"@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points":24,"@mapbox/mapbox-gl-draw/src/lib/move_features":36,"@turf/circle":58,"@turf/distance":60,"@turf/helpers":61}],72:[function(require,module,exports){
const MapboxDraw = require('@mapbox/mapbox-gl-draw');
const Constants = require('@mapbox/mapbox-gl-draw/src/constants');
const doubleClickZoom = require('@mapbox/mapbox-gl-draw/src/lib/double_click_zoom');
const dragPan = require('../utils/drag_pan');
const circle = require('@turf/circle').default;
const distance = require('@turf/distance').default;
const turfHelpers = require('@turf/helpers');

const DragCircleMode = {...MapboxDraw.modes.draw_polygon};

DragCircleMode.onSetup = function(opts) {
  const polygon = this.newFeature({
    type: Constants.geojsonTypes.FEATURE,
    properties: {
      isCircle: true,
      center: []
    },
    geometry: {
      type: Constants.geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });

  this.addFeature(polygon);

  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);
  dragPan.disable(this);
  this.updateUIClasses({ mouse: Constants.cursors.ADD });
  this.activateUIButton(Constants.types.POLYGON);
  this.setActionableState({
    trash: true
  });

  return {
    polygon,
    currentVertexPosition: 0
  };
};

DragCircleMode.onMouseDown = DragCircleMode.onTouchStart = function (state, e) {
  const currentCenter = state.polygon.properties.center;
  if (currentCenter.length === 0) {
    state.polygon.properties.center = [e.lngLat.lng, e.lngLat.lat];
  }
};

DragCircleMode.onDrag = DragCircleMode.onMouseMove = function (state, e) {
  const center = state.polygon.properties.center;
  if (center.length > 0) {
    const distanceInKm = distance(
      turfHelpers.point(center),
      turfHelpers.point([e.lngLat.lng, e.lngLat.lat]),
      { units : 'kilometers'});
    const circleFeature = circle(center, distanceInKm);
    state.polygon.incomingCoords(circleFeature.geometry.coordinates);
    state.polygon.properties.radiusInKm = distanceInKm;
  }
};

DragCircleMode.onMouseUp = DragCircleMode.onTouchEnd = function (state, e) {
  dragPan.enable(this);
  return this.changeMode(Constants.modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
};

DragCircleMode.onClick = DragCircleMode.onTap = function (state, e) {
  // don't draw the circle if its a tap or click event
  state.polygon.properties.center = [];
};

DragCircleMode.toDisplayFeatures = function(state, geojson, display) {
  const isActivePolygon = geojson.properties.id === state.polygon.id;
  geojson.properties.active = (isActivePolygon) ? Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
  return display(geojson);
};

module.exports = DragCircleMode;
},{"../utils/drag_pan":75,"@mapbox/mapbox-gl-draw":12,"@mapbox/mapbox-gl-draw/src/constants":14,"@mapbox/mapbox-gl-draw/src/lib/double_click_zoom":26,"@turf/circle":58,"@turf/distance":60,"@turf/helpers":61}],73:[function(require,module,exports){
const MapboxDraw = require('@mapbox/mapbox-gl-draw');
const createSupplementaryPoints = require('@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points');
const moveFeatures = require('@mapbox/mapbox-gl-draw/src/lib/move_features');
const Constants = require('@mapbox/mapbox-gl-draw/src/constants');
const createSupplementaryPointsForCircle = require('../utils/create_supplementary_points_circle');


const SimpleSelectModeOverride = MapboxDraw.modes.simple_select;

SimpleSelectModeOverride.dragMove = function(state, e) {
  // Dragging when drag move is enabled
  state.dragMoving = true;
  e.originalEvent.stopPropagation();

  const delta = {
    lng: e.lngLat.lng - state.dragMoveLocation.lng,
    lat: e.lngLat.lat - state.dragMoveLocation.lat
  };

  moveFeatures(this.getSelected(), delta);

  this.getSelected()
    .filter(feature => feature.properties.isCircle)
    .map(circle => circle.properties.center)
    .forEach(center => {
      center[0] += delta.lng;
      center[1] += delta.lat;
    });

  state.dragMoveLocation = e.lngLat;
};

SimpleSelectModeOverride.toDisplayFeatures = function(state, geojson, display) {
    geojson.properties.active = (this.isSelected(geojson.properties.id)) ?
      Constants.activeStates.ACTIVE : Constants.activeStates.INACTIVE;
    display(geojson);
    this.fireActionable();
    if (geojson.properties.active !== Constants.activeStates.ACTIVE ||
      geojson.geometry.type === Constants.geojsonTypes.POINT) return;
    const supplementaryPoints = geojson.properties.user_isCircle ?
      createSupplementaryPointsForCircle(geojson) : createSupplementaryPoints(geojson);
    supplementaryPoints.forEach(display);
};
  
module.exports = SimpleSelectModeOverride;
},{"../utils/create_supplementary_points_circle":74,"@mapbox/mapbox-gl-draw":12,"@mapbox/mapbox-gl-draw/src/constants":14,"@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points":24,"@mapbox/mapbox-gl-draw/src/lib/move_features":36}],74:[function(require,module,exports){
const createVertex = require('@mapbox/mapbox-gl-draw/src/lib/create_vertex');

function createSupplementaryPointsForCircle(geojson) {
  const { properties, geometry } = geojson;

  if (!properties.user_isCircle) return null;

  const supplementaryPoints = [];
  const vertices = geometry.coordinates[0].slice(0, -1);
  for (let index = 0; index < vertices.length; index += Math.round((vertices.length / 4))) {
    supplementaryPoints.push(createVertex(properties.id, vertices[index], `0.${index}`, false));
  }
  return supplementaryPoints;
}

module.exports = createSupplementaryPointsForCircle;
},{"@mapbox/mapbox-gl-draw/src/lib/create_vertex":25}],75:[function(require,module,exports){
module.exports = {
    enable(ctx) {
        setTimeout(() => {
            // First check we've got a map and some context.
            if (!ctx.map || !ctx.map.dragPan || !ctx._ctx || !ctx._ctx.store || !ctx._ctx.store.getInitialConfigValue) return;
            // Now check initial state wasn't false (we leave it disabled if so)
            if (!ctx._ctx.store.getInitialConfigValue('dragPan')) return;
            ctx.map.dragPan.enable();
        }, 0);
    },
    disable(ctx) {
        setTimeout(() => {
            if (!ctx.map || !ctx.map.doubleClickZoom) return;
            // Always disable here, as it's necessary in some cases.
            ctx.map.dragPan.disable();
        }, 0);
    }
};

},{}],76:[function(require,module,exports){
/* Mapbox GL JS is licensed under the 3-Clause BSD License. Full text of license: https://github.com/mapbox/mapbox-gl-js/blob/v1.3.0/LICENSE.txt */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = global || self, global.mapboxgl = factory());
}(this, function () { 'use strict';

/* eslint-disable */

var shared, worker, mapboxgl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

    var sharedChunk = {};
    shared(sharedChunk);
    mapboxgl = chunk(sharedChunk);
    mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
}
}


define(["exports"],function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n;function n(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}n.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},n.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},n.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},n.prototype.solveCurveX=function(t,e){var r,n,i,a,o;for(void 0===e&&(e=1e-6),i=t,o=0;o<8;o++){if(a=this.sampleCurveX(i)-t,Math.abs(a)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=a/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(a=this.sampleCurveX(i),Math.abs(a-t)<e)return i;t>a?r=i:n=i,i=.5*(n-r)+r;}return i},n.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var i=a;function a(t,e){this.x=t,this.y=e;}function o(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return !1;for(var r=0;r<t.length;r++)if(!o(t[r],e[r]))return !1;return !0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return !1;if(Object.keys(t).length!==Object.keys(e).length)return !1;for(var n in t)if(!o(t[n],e[n]))return !1;return !0}return t===e}function s(t,e,n,i){var a=new r(t,e,n,i);return function(t){return a.solve(t)}}a.prototype={clone:function(){return new a(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=e*this.x-r*this.y,i=r*this.x+e*this.y;return this.x=n,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.x+r*(this.x-e.x)-n*(this.y-e.y),a=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},a.convert=function(t){return t instanceof a?t:Array.isArray(t)?new a(t[0],t[1]):t};var u=s(.25,.1,.25,1);function l(t,e,r){return Math.min(r,Math.max(e,t))}function p(t,e,r){var n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function c(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}var h=1;function f(){return h++}function y(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function d(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function m(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e));});}function v(t,e){return -1!==t.indexOf(e,t.length-e.length)}function g(t,e,r){var n={};for(var i in t)n[i]=e.call(r||this,t[i],i,t);return n}function x(t,e,r){var n={};for(var i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function b(t){return Array.isArray(t)?t.map(b):"object"==typeof t&&t?g(t,b):t}var _={};function w(t){_[t]||("undefined"!=typeof console&&console.warn(t),_[t]=!0);}function A(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function k(t){for(var e=0,r=0,n=t.length,i=n-1,a=void 0,o=void 0;r<n;i=r++)a=t[r],e+=((o=t[i]).x-a.x)*(a.y+o.y);return e}function S(t){var e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,function(t,r,n,i){var a=n||i;return e[r]=!a||a.toLowerCase(),""}),e["max-age"]){var r=parseInt(e["max-age"],10);isNaN(r)?delete e["max-age"]:e["max-age"]=r;}return e}function z(t){try{var e=self[t];return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return !1}}var I,C,B,E,P=self.performance&&self.performance.now?self.performance.now.bind(self.performance):Date.now.bind(Date),M=self.requestAnimationFrame||self.mozRequestAnimationFrame||self.webkitRequestAnimationFrame||self.msRequestAnimationFrame,T=self.cancelAnimationFrame||self.mozCancelAnimationFrame||self.webkitCancelAnimationFrame||self.msCancelAnimationFrame,V={now:P,frame:function(t){var e=M(t);return {cancel:function(){return T(e)}}},getImageData:function(t){var e=self.document.createElement("canvas"),r=e.getContext("2d");if(!r)throw new Error("failed to create canvas 2d context");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0,t.width,t.height),r.getImageData(0,0,t.width,t.height)},resolveURL:function(t){return I||(I=self.document.createElement("a")),I.href=t,I.href},hardwareConcurrency:self.navigator.hardwareConcurrency||4,get devicePixelRatio(){return self.devicePixelRatio},get prefersReducedMotion(){return !!self.matchMedia&&(null==C&&(C=self.matchMedia("(prefers-reduced-motion: reduce)")),C.matches)}},F={API_URL:"https://api.mapbox.com",get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},FEEDBACK_URL:"https://apps.mapbox.com/feedback",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},O={supported:!1,testSupport:function(t){if(L||!E)return;D?U(t):B=t;}},L=!1,D=!1;function U(t){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,E),t.isContextLost())return;O.supported=!0;}catch(t){}t.deleteTexture(e),L=!0;}self.document&&((E=self.document.createElement("img")).onload=function(){B&&U(B),B=null,D=!0;},E.onerror=function(){L=!0,B=null;},E.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");var R="01";var j=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken();};function q(t){return 0===t.indexOf("mapbox:")}j.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",R,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;},j.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},j.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},j.prototype.normalizeStyleURL=function(t,e){if(!q(t))return t;var r=Z(t);return r.path="/styles/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},j.prototype.normalizeGlyphsURL=function(t,e){if(!q(t))return t;var r=Z(t);return r.path="/fonts/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},j.prototype.normalizeSourceURL=function(t,e){if(!q(t))return t;var r=Z(t);return r.path="/v4/"+r.authority+".json",r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)},j.prototype.normalizeSpriteURL=function(t,e,r,n){var i=Z(t);return q(t)?(i.path="/styles/v1"+i.path+"/sprite"+e+r,this._makeAPIURL(i,this._customAccessToken||n)):(i.path+=""+e+r,G(i))},j.prototype.normalizeTileURL=function(t,e,r){if(this._isSkuTokenExpired()&&this._createSkuToken(),!e||!q(e))return t;var n=Z(t),i=V.devicePixelRatio>=2||512===r?"@2x":"",a=O.supported?".webp":"$1";return n.path=n.path.replace(/(\.(png|jpg)\d*)(?=$)/,""+i+a),n.path=n.path.replace(/^.+\/v4\//,"/"),n.path="/v4"+n.path,F.REQUIRE_ACCESS_TOKEN&&(F.ACCESS_TOKEN||this._customAccessToken)&&this._skuToken&&n.params.push("sku="+this._skuToken),this._makeAPIURL(n,this._customAccessToken)},j.prototype.canonicalizeTileURL=function(t){var e=Z(t);if(!e.path.match(/(^\/v4\/)/)||!e.path.match(/\.[\w]+$/))return t;var r="mapbox://tiles/";r+=e.path.replace("/v4/","");var n=e.params.filter(function(t){return !t.match(/^access_token=/)});return n.length&&(r+="?"+n.join("&")),r},j.prototype.canonicalizeTileset=function(t,e){if(!q(e))return t.tiles||[];for(var r=[],n=0,i=t.tiles;n<i.length;n+=1){var a=i[n],o=this.canonicalizeTileURL(a);r.push(o);}return r},j.prototype._makeAPIURL=function(t,e){var r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",n=Z(F.API_URL);if(t.protocol=n.protocol,t.authority=n.authority,"/"!==n.path&&(t.path=""+n.path+t.path),!F.REQUIRE_ACCESS_TOKEN)return G(t);if(!(e=e||F.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+r);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+r);return t.params=t.params.filter(function(t){return -1===t.indexOf("access_token")}),t.params.push("access_token="+e),G(t)};var N=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;function K(t){return N.test(t)}var X=/^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/;function Z(t){var e=t.match(X);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function G(t){var e=t.params.length?"?"+t.params.join("&"):"";return t.protocol+"://"+t.authority+t.path+e}function J(t){if(!t)return null;var e,r=t.split(".");if(!r||3!==r.length)return null;try{return JSON.parse((e=r[1],decodeURIComponent(self.atob(e).split("").map(function(t){return "%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))))}catch(t){return null}}var H=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;};H.prototype.getStorageKey=function(t){var e,r=J(F.ACCESS_TOKEN),n="";return r&&r.u?(e=r.u,n=self.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode(Number("0x"+e))}))):n=F.ACCESS_TOKEN||"",t?"mapbox.eventData."+t+":"+n:"mapbox.eventData:"+n},H.prototype.fetchEventData=function(){var t=z("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{var n=self.localStorage.getItem(e);n&&(this.eventData=JSON.parse(n));var i=self.localStorage.getItem(r);i&&(this.anonId=i);}catch(t){w("Unable to read from LocalStorage");}},H.prototype.saveEventData=function(){var t=z("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{self.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&self.localStorage.setItem(e,JSON.stringify(this.eventData));}catch(t){w("Unable to write to LocalStorage");}},H.prototype.processRequests=function(t){},H.prototype.postEvent=function(t,e,r,n){var i=this;if(F.EVENTS_URL){var a=Z(F.EVENTS_URL);a.params.push("access_token="+(n||F.ACCESS_TOKEN||""));var o={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:"1.3.0",skuId:R,userId:this.anonId},s=e?c(o,e):o,u={url:G(a),headers:{"Content-Type":"text/plain"},body:JSON.stringify([s])};this.pendingRequest=vt(u,function(t){i.pendingRequest=null,r(t),i.saveEventData(),i.processRequests(n);});}},H.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e);};var Y,$=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken="";}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,n){this.skuToken=r,(F.EVENTS_URL&&n||F.ACCESS_TOKEN&&Array.isArray(t)&&t.some(function(t){return q(t)||K(t)}))&&this.queueRequest({id:e,timestamp:Date.now()},n);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),n=r.id,i=r.timestamp;n&&this.success[n]||(this.anonId||this.fetchEventData(),d(this.anonId)||(this.anonId=y()),this.postEvent(i,{skuToken:this.skuToken},function(t){t||n&&(e.success[n]=!0);},t));}},e}(H),W=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postTurnstileEvent=function(t,e){F.EVENTS_URL&&F.ACCESS_TOKEN&&Array.isArray(t)&&t.some(function(t){return q(t)||K(t)})&&this.queueRequest(Date.now(),e);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();var r=J(F.ACCESS_TOKEN),n=r?r.u:F.ACCESS_TOKEN,i=n!==this.eventData.tokenU;d(this.anonId)||(this.anonId=y(),i=!0);var a=this.queue.shift();if(this.eventData.lastSuccess){var o=new Date(this.eventData.lastSuccess),s=new Date(a),u=(a-this.eventData.lastSuccess)/864e5;i=i||u>=1||u<-1||o.getDate()!==s.getDate();}else i=!0;if(!i)return this.processRequests();this.postEvent(a,{"enabled.telemetry":!1},function(t){t||(e.eventData.lastSuccess=a,e.eventData.tokenU=n);},t);}},e}(H)),Q=W.postTurnstileEvent.bind(W),tt=new $,et=tt.postMapLoadEvent.bind(tt),rt="mapbox-tiles",nt=500,it=50,at=42e4;function ot(t,e,r){if(self.caches){var n={status:e.status,statusText:e.statusText,headers:new self.Headers};e.headers.forEach(function(t,e){return n.headers.set(e,t)});var i=S(e.headers.get("Cache-Control")||"");if(!i["no-store"])i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<at||function(t,e){if(void 0===Y)try{new Response(new ReadableStream),Y=!0;}catch(t){Y=!1;}Y?e(t.body):t.blob().then(e);}(e,function(e){var r=new self.Response(e,n);self.caches.open(rt).then(function(e){return e.put(st(t.url),r)});});}}function st(t){var e=t.indexOf("?");return e<0?t:t.slice(0,e)}function ut(t,e){if(!self.caches)return e(null);var r=st(t.url);self.caches.open(rt).catch(e).then(function(t){t.match(r).catch(e).then(function(n){var i=function(t){if(!t)return !1;var e=new Date(t.headers.get("Expires")),r=S(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);});});}var lt=1/0;var pt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(pt);var ct=function(t){function e(e,r,n){401===r&&K(n)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=n,this.name=this.constructor.name,this.message=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error);function ht(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}var ft=ht()?function(){return self.worker&&self.worker.referrer}:function(){return ("blob:"===self.location.protocol?self.parent:self).location.href};function yt(t,e){var r,n=new self.AbortController,i=new self.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:ft(),signal:n.signal}),a=!1,o=!1,s=(r=i.url).indexOf("sku=")>0&&K(r);"json"===t.type&&i.headers.set("Accept","application/json");var u=function(r,n,a){if(!o){if(r&&"SecurityError"!==r.message&&w(r),n&&a)return l(n);var u=Date.now();self.fetch(i).then(function(r){if(r.ok){var n=s?r.clone():null;return l(r,n,u)}return e(new ct(r.statusText,r.status,t.url))}).catch(function(t){20!==t.code&&e(new Error(t.message));});}},l=function(r,n,s){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then(function(t){o||(n&&s&&ot(i,n,s),a=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));}).catch(function(t){return e(new Error(t.message))});};return s?ut(i,u):u(null,null),{cancel:function(){o=!0,a||n.abort();}}}var dt=function(t,e){if(r=t.url,!(/^file:/.test(r)||/^file:/.test(ft())&&!/^\w+:/.test(r))){if(self.fetch&&self.Request&&self.AbortController&&self.Request.prototype.hasOwnProperty("signal"))return yt(t,e);if(ht()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e)}var r;return function(t,e){var r=new self.XMLHttpRequest;for(var n in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(n,t.headers[n]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else e(new ct(r.statusText,r.status,t.url));},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},mt=function(t,e){return dt(c(t,{type:"arrayBuffer"}),e)},vt=function(t,e){return dt(c(t,{method:"POST"}),e)};var gt,xt;gt=[],xt=0;var bt=function(t,e){if(xt>=F.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0;}};return gt.push(r),r}xt++;var n=!1,i=function(){if(!n)for(n=!0,xt--;gt.length&&xt<F.MAX_PARALLEL_IMAGE_REQUESTS;){var t=gt.shift(),e=t.requestParameters,r=t.callback;t.cancelled||(t.cancel=bt(e,r).cancel);}},a=mt(t,function(t,r,n,a){if(i(),t)e(t);else if(r){var o=new self.Image,s=self.URL||self.webkitURL;o.onload=function(){e(null,o),s.revokeObjectURL(o.src);},o.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var u=new self.Blob([new Uint8Array(r)],{type:"image/png"});o.cacheControl=n,o.expires=a,o.src=r.byteLength?s.createObjectURL(u):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";}});return {cancel:function(){a.cancel(),i();}}};function _t(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function wt(t,e,r){if(r&&r[t]){var n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}var At=function(t,e){void 0===e&&(e={}),c(this,e),this.type=t;},kt=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",c({error:e},r));}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(At),St=function(){};St.prototype.on=function(t,e){return this._listeners=this._listeners||{},_t(t,e,this._listeners),this},St.prototype.off=function(t,e){return wt(t,e,this._listeners),wt(t,e,this._oneTimeListeners),this},St.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},_t(t,e,this._oneTimeListeners),this},St.prototype.fire=function(t,e){"string"==typeof t&&(t=new At(t,e||{}));var r=t.type;if(this.listens(r)){t.target=this;for(var n=0,i=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];n<i.length;n+=1){i[n].call(this,t);}for(var a=0,o=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];a<o.length;a+=1){var s=o[a];wt(r,s,this._oneTimeListeners),s.call(this,t);}var u=this._eventedParent;u&&(c(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),u.fire(t));}else t instanceof kt&&console.error(t.error);return this},St.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},St.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this};var zt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"string",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"},{"!":"text-variable-anchor"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:22,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"string",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"string",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"string",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"string",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}}},It=function(t,e,r,n){this.message=(t?t+": ":"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);};function Ct(t){var e=t.key,r=t.value;return r?[new It(e,r,"constants have been deprecated as of v8")]:[]}function Bt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}function Et(t){return t instanceof Number||t instanceof String||t instanceof Boolean}function Pt(t){return Et(t)?t.valueOf():t}function Mt(t){if(Array.isArray(t))return t.map(Mt);if(t instanceof Object&&!Et(t)){var e={};for(var r in t)e[r]=Mt(t[r]);return e}return Pt(t)}var Tt=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),Vt=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={};for(var r=0,n=e;r<n.length;r+=1){var i=n[r],a=i[0],o=i[1];this.bindings[a]=o;}};Vt.prototype.concat=function(t){return new Vt(this,t)},Vt.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},Vt.prototype.has=function(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)};var Ft={kind:"null"},Ot={kind:"number"},Lt={kind:"string"},Dt={kind:"boolean"},Ut={kind:"color"},Rt={kind:"object"},jt={kind:"value"},qt={kind:"collator"},Nt={kind:"formatted"};function Kt(t,e){return {kind:"array",itemType:t,N:e}}function Xt(t){if("array"===t.kind){var e=Xt(t.itemType);return "number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var Zt=[Ft,Ot,Lt,Dt,Ut,Nt,Rt,Kt(jt)];function Gt(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!Gt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null;if("value"===t.kind)for(var r=0,n=Zt;r<n.length;r+=1){if(!Gt(n[r],e))return null}}return "Expected "+Xt(t)+" but found "+Xt(e)+" instead."}var Jt=e(function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return (t=Math.round(t))<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function a(t){return "%"===t[t.length-1]?n(parseFloat(t)/100*255):n(parseInt(t))}function o(t){return "%"===t[t.length-1]?i(parseFloat(t)/100):i(parseFloat(t))}function s(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,i=t.replace(/ /g,"").toLowerCase();if(i in r)return r[i].slice();if("#"===i[0])return 4===i.length?(e=parseInt(i.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===i.length&&(e=parseInt(i.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var u=i.indexOf("("),l=i.indexOf(")");if(-1!==u&&l+1===i.length){var p=i.substr(0,u),c=i.substr(u+1,l-(u+1)).split(","),h=1;switch(p){case"rgba":if(4!==c.length)return null;h=o(c.pop());case"rgb":return 3!==c.length?null:[a(c[0]),a(c[1]),a(c[2]),h];case"hsla":if(4!==c.length)return null;h=o(c.pop());case"hsl":if(3!==c.length)return null;var f=(parseFloat(c[0])%360+360)%360/360,y=o(c[1]),d=o(c[2]),m=d<=.5?d*(y+1):d+y-d*y,v=2*d-m;return [n(255*s(v,m,f+1/3)),n(255*s(v,m,f)),n(255*s(v,m,f-1/3)),h];default:return null}}return null};}catch(t){}}).parseCSSColor,Ht=function(t,e,r,n){void 0===n&&(n=1),this.r=t,this.g=e,this.b=r,this.a=n;};Ht.parse=function(t){if(t){if(t instanceof Ht)return t;if("string"==typeof t){var e=Jt(t);if(e)return new Ht(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Ht.prototype.toString=function(){var t=this.toArray(),e=t[0],r=t[1],n=t[2],i=t[3];return "rgba("+Math.round(e)+","+Math.round(r)+","+Math.round(n)+","+i+")"},Ht.prototype.toArray=function(){var t=this.r,e=this.g,r=this.b,n=this.a;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]},Ht.black=new Ht(0,0,0,1),Ht.white=new Ht(1,1,1,1),Ht.transparent=new Ht(0,0,0,0),Ht.red=new Ht(1,0,0,1);var Yt=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});};Yt.prototype.compare=function(t,e){return this.collator.compare(t,e)},Yt.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale};var $t=function(t,e,r,n){this.text=t,this.scale=e,this.fontStack=r,this.textColor=n;},Wt=function(t){this.sections=t;};function Qt(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[t,e,r,n].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function te(t){if(null===t)return Ft;if("string"==typeof t)return Lt;if("boolean"==typeof t)return Dt;if("number"==typeof t)return Ot;if(t instanceof Ht)return Ut;if(t instanceof Yt)return qt;if(t instanceof Wt)return Nt;if(Array.isArray(t)){for(var e,r=t.length,n=0,i=t;n<i.length;n+=1){var a=te(i[n]);if(e){if(e===a)continue;e=jt;break}e=a;}return Kt(e||jt,r)}return Rt}function ee(t){var e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Ht||t instanceof Wt?t.toString():JSON.stringify(t)}Wt.fromString=function(t){return new Wt([new $t(t,null,null,null)])},Wt.prototype.toString=function(){return this.sections.map(function(t){return t.text}).join("")},Wt.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t.push(n.text);var i={};n.fontStack&&(i["text-font"]=["literal",n.fontStack.split(",")]),n.scale&&(i["font-scale"]=n.scale),n.textColor&&(i["text-color"]=["rgba"].concat(n.textColor.toArray())),t.push(i);}return t};var re=function(t,e){this.type=t,this.value=e;};re.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(!function t(e){if(null===e)return !0;if("string"==typeof e)return !0;if("boolean"==typeof e)return !0;if("number"==typeof e)return !0;if(e instanceof Ht)return !0;if(e instanceof Yt)return !0;if(e instanceof Wt)return !0;if(Array.isArray(e)){for(var r=0,n=e;r<n.length;r+=1)if(!t(n[r]))return !1;return !0}if("object"==typeof e){for(var i in e)if(!t(e[i]))return !1;return !0}return !1}(t[1]))return e.error("invalid value");var r=t[1],n=te(r),i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new re(n,r)},re.prototype.evaluate=function(){return this.value},re.prototype.eachChild=function(){},re.prototype.possibleOutputs=function(){return [this.value]},re.prototype.serialize=function(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Ht?["rgba"].concat(this.value.toArray()):this.value instanceof Wt?this.value.serialize():this.value};var ne=function(t){this.name="ExpressionEvaluationError",this.message=t;};ne.prototype.toJSON=function(){return this.message};var ie={string:Lt,number:Ot,boolean:Dt,object:Rt},ae=function(t,e){this.type=t,this.args=e;};ae.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r,n=1,i=t[0];if("array"===i){var a,o;if(t.length>2){var s=t[1];if("string"!=typeof s||!(s in ie)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1);a=ie[s],n++;}else a=jt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);o=t[2],n++;}r=Kt(a,o);}else r=ie[i];for(var u=[];n<t.length;n++){var l=e.parse(t[n],n,jt);if(!l)return null;u.push(l);}return new ae(r,u)},ae.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t);if(!Gt(this.type,te(r)))return r;if(e===this.args.length-1)throw new ne("Expected value to be of type "+Xt(this.type)+", but found "+Xt(te(r))+" instead.")}return null},ae.prototype.eachChild=function(t){this.args.forEach(t);},ae.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},ae.prototype.serialize=function(){var t=this.type,e=[t.kind];if("array"===t.kind){var r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);var n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map(function(t){return t.serialize()}))};var oe=function(t){this.type=Nt,this.sections=t;};oe.parse=function(t,e){if(t.length<3)return e.error("Expected at least two arguments.");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");for(var r=[],n=1;n<t.length-1;n+=2){var i=e.parse(t[n],1,jt);if(!i)return null;var a=i.type.kind;if("string"!==a&&"value"!==a&&"null"!==a)return e.error("Formatted text type must be 'string', 'value', or 'null'.");var o=t[n+1];if("object"!=typeof o||Array.isArray(o))return e.error("Format options argument must be an object.");var s=null;if(o["font-scale"]&&!(s=e.parse(o["font-scale"],1,Ot)))return null;var u=null;if(o["text-font"]&&!(u=e.parse(o["text-font"],1,Kt(Lt))))return null;var l=null;if(o["text-color"]&&!(l=e.parse(o["text-color"],1,Ut)))return null;r.push({text:i,scale:s,font:u,textColor:l});}return new oe(r)},oe.prototype.evaluate=function(t){return new Wt(this.sections.map(function(e){return new $t(ee(e.text.evaluate(t)),e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)}))},oe.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t(n.text),n.scale&&t(n.scale),n.font&&t(n.font),n.textColor&&t(n.textColor);}},oe.prototype.possibleOutputs=function(){return [void 0]},oe.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t.push(n.text.serialize());var i={};n.scale&&(i["font-scale"]=n.scale.serialize()),n.font&&(i["text-font"]=n.font.serialize()),n.textColor&&(i["text-color"]=n.textColor.serialize()),t.push(i);}return t};var se={"to-boolean":Dt,"to-color":Ut,"to-number":Ot,"to-string":Lt},ue=function(t,e){this.type=t,this.args=e;};ue.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");for(var n=se[r],i=[],a=1;a<t.length;a++){var o=e.parse(t[a],a,jt);if(!o)return null;i.push(o);}return new ue(n,i)},ue.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){for(var e,r,n=0,i=this.args;n<i.length;n+=1){if(r=null,(e=i[n].evaluate(t))instanceof Ht)return e;if("string"==typeof e){var a=t.parseColor(e);if(a)return a}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":Qt(e[0],e[1],e[2],e[3])))return new Ht(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new ne(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var o=null,s=0,u=this.args;s<u.length;s+=1){if(null===(o=u[s].evaluate(t)))return 0;var l=Number(o);if(!isNaN(l))return l}throw new ne("Could not convert "+JSON.stringify(o)+" to number.")}return "formatted"===this.type.kind?Wt.fromString(ee(this.args[0].evaluate(t))):ee(this.args[0].evaluate(t))},ue.prototype.eachChild=function(t){this.args.forEach(t);},ue.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},ue.prototype.serialize=function(){if("formatted"===this.type.kind)return new oe([{text:this.args[0],scale:null,font:null,textColor:null}]).serialize();var t=["to-"+this.type.kind];return this.eachChild(function(e){t.push(e.serialize());}),t};var le=["Unknown","Point","LineString","Polygon"],pe=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={};};pe.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},pe.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?le[this.feature.type]:this.feature.type:null},pe.prototype.properties=function(){return this.feature&&this.feature.properties||{}},pe.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Ht.parse(t)),e};var ce=function(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;};ce.prototype.evaluate=function(t){return this._evaluate(t,this.args)},ce.prototype.eachChild=function(t){this.args.forEach(t);},ce.prototype.possibleOutputs=function(){return [void 0]},ce.prototype.serialize=function(){return [this.name].concat(this.args.map(function(t){return t.serialize()}))},ce.parse=function(t,e){var r,n=t[0],i=ce.definitions[n];if(!i)return e.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0);for(var a=Array.isArray(i)?i[0]:i.type,o=Array.isArray(i)?[[i[1],i[2]]]:i.overloads,s=o.filter(function(e){var r=e[0];return !Array.isArray(r)||r.length===t.length-1}),u=null,l=0,p=s;l<p.length;l+=1){var c=p[l],h=c[0],f=c[1];u=new ve(e.registry,e.path,null,e.scope);for(var y=[],d=!1,m=1;m<t.length;m++){var v=t[m],g=Array.isArray(h)?h[m-1]:h.type,x=u.parse(v,1+y.length,g);if(!x){d=!0;break}y.push(x);}if(!d)if(Array.isArray(h)&&h.length!==y.length)u.error("Expected "+h.length+" arguments, but found "+y.length+" instead.");else{for(var b=0;b<y.length;b++){var _=Array.isArray(h)?h[b]:h.type,w=y[b];u.concat(b+1).checkSubtype(_,w.type);}if(0===u.errors.length)return new ce(n,a,f,y)}}if(1===s.length)(r=e.errors).push.apply(r,u.errors);else{for(var A=(s.length?s:o).map(function(t){var e,r=t[0];return e=r,Array.isArray(e)?"("+e.map(Xt).join(", ")+")":"("+Xt(e.type)+"...)"}).join(" | "),k=[],S=1;S<t.length;S++){var z=e.parse(t[S],1+k.length);if(!z)return null;k.push(Xt(z.type));}e.error("Expected arguments of type "+A+", but found ("+k.join(", ")+") instead.");}return null},ce.register=function(t,e){for(var r in ce.definitions=e,e)t[r]=ce;};var he=function(t,e,r){this.type=qt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;};function fe(t){if(t instanceof ce){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}var e=!0;return t.eachChild(function(t){e&&!fe(t)&&(e=!1);}),e}function ye(t){if(t instanceof ce&&"feature-state"===t.name)return !1;var e=!0;return t.eachChild(function(t){e&&!ye(t)&&(e=!1);}),e}function de(t,e){if(t instanceof ce&&e.indexOf(t.name)>=0)return !1;var r=!0;return t.eachChild(function(t){r&&!de(t,e)&&(r=!1);}),r}he.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.");var r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");var n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,Dt);if(!n)return null;var i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,Dt);if(!i)return null;var a=null;return r.locale&&!(a=e.parse(r.locale,1,Lt))?null:new he(n,i,a)},he.prototype.evaluate=function(t){return new Yt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},he.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);},he.prototype.possibleOutputs=function(){return [void 0]},he.prototype.serialize=function(){var t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]};var me=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e;};me.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");var r=t[1];return e.scope.has(r)?new me(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},me.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},me.prototype.eachChild=function(){},me.prototype.possibleOutputs=function(){return [void 0]},me.prototype.serialize=function(){return ["var",this.name]};var ve=function(t,e,r,n,i){void 0===e&&(e=[]),void 0===n&&(n=new Vt),void 0===i&&(i=[]),this.registry=t,this.path=e,this.key=e.map(function(t){return "["+t+"]"}).join(""),this.scope=n,this.errors=i,this.expectedType=r;};function ge(t,e){for(var r,n,i=t.length-1,a=0,o=i,s=0;a<=o;)if(r=t[s=Math.floor((a+o)/2)],n=t[s+1],r<=e){if(s===i||e<n)return s;a=s+1;}else{if(!(r>e))throw new ne("Input is not a number.");o=s-1;}return 0}ve.prototype.parse=function(t,e,r,n,i){return void 0===i&&(i={}),e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)},ve.prototype._parse=function(t,e){function r(t,e,r){return "assert"===r?new ae(e,[t]):"coerce"===r?new ue(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var n=t[0];if("string"!=typeof n)return this.error("Expression name must be a string, but found "+typeof n+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var i=this.registry[n];if(i){var a=i.parse(t,this);if(!a)return null;if(this.expectedType){var o=this.expectedType,s=a.type;if("string"!==o.kind&&"number"!==o.kind&&"boolean"!==o.kind&&"object"!==o.kind&&"array"!==o.kind||"value"!==s.kind)if("color"!==o.kind&&"formatted"!==o.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(o,s))return null}else a=r(a,o,e.typeAnnotation||"coerce");else a=r(a,o,e.typeAnnotation||"assert");}if(!(a instanceof re)&&function t(e){if(e instanceof me)return t(e.boundExpression);if(e instanceof ce&&"error"===e.name)return !1;if(e instanceof he)return !1;var r=e instanceof ue||e instanceof ae;var n=!0;e.eachChild(function(e){n=r?n&&t(e):n&&e instanceof re;});if(!n)return !1;return fe(e)&&de(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(a)){var u=new pe;try{a=new re(a.type,a.evaluate(u));}catch(t){return this.error(t.message),null}}return a}return this.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===t?this.error("'undefined' value invalid. Use null instead."):"object"==typeof t?this.error('Bare objects invalid. Use ["literal", {...}] instead.'):this.error("Expected an array, but found "+typeof t+" instead.")},ve.prototype.concat=function(t,e,r){var n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new ve(this.registry,n,e||null,i,this.errors)},ve.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=""+this.key+e.map(function(t){return "["+t+"]"}).join("");this.errors.push(new Tt(n,t));},ve.prototype.checkSubtype=function(t,e){var r=Gt(t,e);return r&&this.error(r),r};var xe=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(var n=0,i=r;n<i.length;n+=1){var a=i[n],o=a[0],s=a[1];this.labels.push(o),this.outputs.push(s);}};xe.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");var r=e.parse(t[1],1,Ot);if(!r)return null;var n=[],i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(var a=1;a<t.length;a+=2){var o=1===a?-1/0:t[a],s=t[a+1],u=a,l=a+1;if("number"!=typeof o)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',u);if(n.length&&n[n.length-1][0]>=o)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',u);var p=e.parse(s,l,i);if(!p)return null;i=i||p.type,n.push([o,p]);}return new xe(i,r,n)},xe.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[ge(e,n)].evaluate(t)},xe.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},xe.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}))},xe.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t};var be=_e;function _e(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}function we(t,e,r){return t*(1-r)+e*r}_e.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},_e.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},_e.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},_e.prototype.solveCurveX=function(t,e){var r,n,i,a,o;for(void 0===e&&(e=1e-6),i=t,o=0;o<8;o++){if(a=this.sampleCurveX(i)-t,Math.abs(a)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=a/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(a=this.sampleCurveX(i),Math.abs(a-t)<e)return i;t>a?r=i:n=i,i=.5*(n-r)+r;}return i},_e.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var Ae=Object.freeze({number:we,color:function(t,e,r){return new Ht(we(t.r,e.r,r),we(t.g,e.g,r),we(t.b,e.b,r),we(t.a,e.a,r))},array:function(t,e,r){return t.map(function(t,n){return we(t,e[n],r)})}}),ke=.95047,Se=1,ze=1.08883,Ie=4/29,Ce=6/29,Be=3*Ce*Ce,Ee=Ce*Ce*Ce,Pe=Math.PI/180,Me=180/Math.PI;function Te(t){return t>Ee?Math.pow(t,1/3):t/Be+Ie}function Ve(t){return t>Ce?t*t*t:Be*(t-Ie)}function Fe(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Oe(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Le(t){var e=Oe(t.r),r=Oe(t.g),n=Oe(t.b),i=Te((.4124564*e+.3575761*r+.1804375*n)/ke),a=Te((.2126729*e+.7151522*r+.072175*n)/Se);return {l:116*a-16,a:500*(i-a),b:200*(a-Te((.0193339*e+.119192*r+.9503041*n)/ze)),alpha:t.a}}function De(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=Se*Ve(e),r=ke*Ve(r),n=ze*Ve(n),new Ht(Fe(3.2404542*r-1.5371385*e-.4985314*n),Fe(-.969266*r+1.8760108*e+.041556*n),Fe(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Ue(t,e,r){var n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}var Re={forward:Le,reverse:De,interpolate:function(t,e,r){return {l:we(t.l,e.l,r),a:we(t.a,e.a,r),b:we(t.b,e.b,r),alpha:we(t.alpha,e.alpha,r)}}},je={forward:function(t){var e=Le(t),r=e.l,n=e.a,i=e.b,a=Math.atan2(i,n)*Me;return {h:a<0?a+360:a,c:Math.sqrt(n*n+i*i),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Pe,r=t.c;return De({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Ue(t.h,e.h,r),c:we(t.c,e.c,r),l:we(t.l,e.l,r),alpha:we(t.alpha,e.alpha,r)}}},qe=Object.freeze({lab:Re,hcl:je}),Ne=function(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(var a=0,o=i;a<o.length;a+=1){var s=o[a],u=s[0],l=s[1];this.labels.push(u),this.outputs.push(l);}};function Ke(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}Ne.interpolationFactor=function(t,e,r,n){var i=0;if("exponential"===t.name)i=Ke(e,t.base,r,n);else if("linear"===t.name)i=Ke(e,1,r,n);else if("cubic-bezier"===t.name){var a=t.controlPoints;i=new be(a[0],a[1],a[2],a[3]).solve(Ke(e,1,r,n));}return i},Ne.parse=function(t,e){var r=t[0],n=t[1],i=t[2],a=t.slice(3);if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){var o=n[1];if("number"!=typeof o)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:o};}else{if("cubic-bezier"!==n[0])return e.error("Unknown interpolation type "+String(n[0]),1,0);var s=n.slice(1);if(4!==s.length||s.some(function(t){return "number"!=typeof t||t<0||t>1}))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:s};}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(i=e.parse(i,2,Ot)))return null;var u=[],l=null;"interpolate-hcl"===r||"interpolate-lab"===r?l=Ut:e.expectedType&&"value"!==e.expectedType.kind&&(l=e.expectedType);for(var p=0;p<a.length;p+=2){var c=a[p],h=a[p+1],f=p+3,y=p+4;if("number"!=typeof c)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f);if(u.length&&u[u.length-1][0]>=c)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f);var d=e.parse(h,y,l);if(!d)return null;l=l||d.type,u.push([c,d]);}return "number"===l.kind||"color"===l.kind||"array"===l.kind&&"number"===l.itemType.kind&&"number"==typeof l.N?new Ne(l,r,n,i,u):e.error("Type "+Xt(l)+" is not interpolatable.")},Ne.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);var a=ge(e,n),o=e[a],s=e[a+1],u=Ne.interpolationFactor(this.interpolation,n,o,s),l=r[a].evaluate(t),p=r[a+1].evaluate(t);return "interpolate"===this.operator?Ae[this.type.kind.toLowerCase()](l,p,u):"interpolate-hcl"===this.operator?je.reverse(je.interpolate(je.forward(l),je.forward(p),u)):Re.reverse(Re.interpolate(Re.forward(l),Re.forward(p),u))},Ne.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},Ne.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}))},Ne.prototype.serialize=function(){var t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize());return e};var Xe=function(t,e){this.type=t,this.args=e;};Xe.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.");var r=null,n=e.expectedType;n&&"value"!==n.kind&&(r=n);for(var i=[],a=0,o=t.slice(1);a<o.length;a+=1){var s=o[a],u=e.parse(s,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!u)return null;r=r||u.type,i.push(u);}var l=n&&i.some(function(t){return Gt(n,t.type)});return new Xe(l?jt:r,i)},Xe.prototype.evaluate=function(t){for(var e=null,r=0,n=this.args;r<n.length;r+=1){if(null!==(e=n[r].evaluate(t)))break}return e},Xe.prototype.eachChild=function(t){this.args.forEach(t);},Xe.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},Xe.prototype.serialize=function(){var t=["coalesce"];return this.eachChild(function(e){t.push(e.serialize());}),t};var Ze=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;};Ze.prototype.evaluate=function(t){return this.result.evaluate(t)},Ze.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1){t(r[e][1]);}t(this.result);},Ze.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var i=t[n];if("string"!=typeof i)return e.error("Expected string, but found "+typeof i+" instead.",n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}var o=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return o?new Ze(r,o):null},Ze.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},Ze.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t.push(i,a.serialize());}return t.push(this.result.serialize()),t};var Ge=function(t,e,r){this.type=t,this.index=e,this.input=r;};Ge.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,Ot),n=e.parse(t[2],2,Kt(e.expectedType||jt));if(!r||!n)return null;var i=n.type;return new Ge(i.itemType,r,n)},Ge.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new ne("Array index out of bounds: "+e+" < 0.");if(e>=r.length)throw new ne("Array index out of bounds: "+e+" > "+(r.length-1)+".");if(e!==Math.floor(e))throw new ne("Array index must be an integer, but found "+e+" instead.");return r[e]},Ge.prototype.eachChild=function(t){t(this.index),t(this.input);},Ge.prototype.possibleOutputs=function(){return [void 0]},Ge.prototype.serialize=function(){return ["at",this.index.serialize(),this.input.serialize()]};var Je=function(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;};Je.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if(t.length%2!=1)return e.error("Expected an even number of arguments.");var r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);for(var i={},a=[],o=2;o<t.length-1;o+=2){var s=t[o],u=t[o+1];Array.isArray(s)||(s=[s]);var l=e.concat(o);if(0===s.length)return l.error("Expected at least one branch label.");for(var p=0,c=s;p<c.length;p+=1){var h=c[p];if("number"!=typeof h&&"string"!=typeof h)return l.error("Branch labels must be numbers or strings.");if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return l.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof h&&Math.floor(h)!==h)return l.error("Numeric branch labels must be integer values.");if(r){if(l.checkSubtype(r,te(h)))return null}else r=te(h);if(void 0!==i[String(h)])return l.error("Branch labels must be unique.");i[String(h)]=a.length;}var f=e.parse(u,o,n);if(!f)return null;n=n||f.type,a.push(f);}var y=e.parse(t[1],1,jt);if(!y)return null;var d=e.parse(t[t.length-1],t.length-1,n);return d?"value"!==y.type.kind&&e.concat(1).checkSubtype(r,y.type)?null:new Je(r,n,y,i,a,d):null},Je.prototype.evaluate=function(t){var e=this.input.evaluate(t);return (te(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},Je.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);},Je.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()})).concat(this.otherwise.possibleOutputs())},Je.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],n={},i=0,a=Object.keys(this.cases).sort();i<a.length;i+=1){var o=a[i];void 0===(c=n[this.cases[o]])?(n[this.cases[o]]=r.length,r.push([this.cases[o],[o]])):r[c][1].push(o);}for(var s=function(e){return "number"===t.inputType.kind?Number(e):e},u=0,l=r;u<l.length;u+=1){var p=l[u],c=p[0],h=p[1];1===h.length?e.push(s(h[0])):e.push(h.map(s)),e.push(this.outputs[outputIndex$1].serialize());}return e.push(this.otherwise.serialize()),e};var He=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r;};function Ye(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function $e(t,e,r,n){return 0===n.compare(e,r)}function We(t,e,r){var n="=="!==t&&"!="!==t;return function(){function i(t,e,r){this.type=Dt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}return i.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");var r=t[0],a=e.parse(t[1],1,jt);if(!a)return null;if(!Ye(r,a.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+Xt(a.type)+"'.");var o=e.parse(t[2],2,jt);if(!o)return null;if(!Ye(r,o.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+Xt(o.type)+"'.");if(a.type.kind!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot compare types '"+Xt(a.type)+"' and '"+Xt(o.type)+"'.");n&&("value"===a.type.kind&&"value"!==o.type.kind?a=new ae(o.type,[a]):"value"!==a.type.kind&&"value"===o.type.kind&&(o=new ae(a.type,[o])));var s=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot use collator to compare non-string types.");if(!(s=e.parse(t[3],3,qt)))return null}return new i(a,o,s)},i.prototype.evaluate=function(i){var a=this.lhs.evaluate(i),o=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){var s=te(a),u=te(o);if(s.kind!==u.kind||"string"!==s.kind&&"number"!==s.kind)throw new ne('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+u.kind+") instead.")}if(this.collator&&!n&&this.hasUntypedArgument){var l=te(a),p=te(o);if("string"!==l.kind||"string"!==p.kind)return e(i,a,o)}return this.collator?r(i,a,o,this.collator.evaluate(i)):e(i,a,o)},i.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);},i.prototype.possibleOutputs=function(){return [!0,!1]},i.prototype.serialize=function(){var e=[t];return this.eachChild(function(t){e.push(t.serialize());}),e},i}()}He.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".");if(t.length%2!=0)return e.error("Expected an odd number of arguments.");var r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);for(var n=[],i=1;i<t.length-1;i+=2){var a=e.parse(t[i],i,Dt);if(!a)return null;var o=e.parse(t[i+1],i+1,r);if(!o)return null;n.push([a,o]),r=r||o.type;}var s=e.parse(t[t.length-1],t.length-1,r);return s?new He(r,n,s):null},He.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];if(i.evaluate(t))return a.evaluate(t)}return this.otherwise.evaluate(t)},He.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t(i),t(a);}t(this.otherwise);},He.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.branches.map(function(t){t[0];return t[1].possibleOutputs()})).concat(this.otherwise.possibleOutputs())},He.prototype.serialize=function(){var t=["case"];return this.eachChild(function(e){t.push(e.serialize());}),t};var Qe=We("==",function(t,e,r){return e===r},$e),tr=We("!=",function(t,e,r){return e!==r},function(t,e,r,n){return !$e(0,e,r,n)}),er=We("<",function(t,e,r){return e<r},function(t,e,r,n){return n.compare(e,r)<0}),rr=We(">",function(t,e,r){return e>r},function(t,e,r,n){return n.compare(e,r)>0}),nr=We("<=",function(t,e,r){return e<=r},function(t,e,r,n){return n.compare(e,r)<=0}),ir=We(">=",function(t,e,r){return e>=r},function(t,e,r,n){return n.compare(e,r)>=0}),ar=function(t,e,r,n,i){this.type=Lt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;};ar.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Ot);if(!r)return null;var n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");var i=null;if(n.locale&&!(i=e.parse(n.locale,1,Lt)))return null;var a=null;if(n.currency&&!(a=e.parse(n.currency,1,Lt)))return null;var o=null;if(n["min-fraction-digits"]&&!(o=e.parse(n["min-fraction-digits"],1,Ot)))return null;var s=null;return n["max-fraction-digits"]&&!(s=e.parse(n["max-fraction-digits"],1,Ot))?null:new ar(r,i,a,o,s)},ar.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},ar.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);},ar.prototype.possibleOutputs=function(){return [void 0]},ar.prototype.serialize=function(){var t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]};var or=function(t){this.type=Ot,this.input=t;};or.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+Xt(r.type)+" instead."):new or(r):null},or.prototype.evaluate=function(t){var e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new ne("Expected value to be of type string or array, but found "+Xt(te(e))+" instead.")},or.prototype.eachChild=function(t){t(this.input);},or.prototype.possibleOutputs=function(){return [void 0]},or.prototype.serialize=function(){var t=["length"];return this.eachChild(function(e){t.push(e.serialize());}),t};var sr={"==":Qe,"!=":tr,">":rr,"<":er,">=":ir,"<=":nr,array:ae,at:Ge,boolean:ae,case:He,coalesce:Xe,collator:he,format:oe,interpolate:Ne,"interpolate-hcl":Ne,"interpolate-lab":Ne,length:or,let:Ze,literal:re,match:Je,number:ae,"number-format":ar,object:ae,step:xe,string:ae,"to-boolean":ue,"to-color":ue,"to-number":ue,"to-string":ue,var:me};function ur(t,e){var r=e[0],n=e[1],i=e[2],a=e[3];r=r.evaluate(t),n=n.evaluate(t),i=i.evaluate(t);var o=a?a.evaluate(t):1,s=Qt(r,n,i,o);if(s)throw new ne(s);return new Ht(r/255*o,n/255*o,i/255*o,o)}function lr(t,e){return t in e}function pr(t,e){var r=e[t];return void 0===r?null:r}function cr(t){return {type:t}}function hr(t){return {result:"success",value:t}}function fr(t){return {result:"error",value:t}}function yr(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function dr(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function mr(t){return !!t.expression&&t.expression.interpolated}function vr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function gr(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function xr(t){return t}function br(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function _r(t,e,r,n,i){return br(typeof r===i?n[r]:void 0,t.default,e.default)}function wr(t,e,r){if("number"!==vr(r))return br(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];var i=ge(t.stops.map(function(t){return t[0]}),r);return t.stops[i][1]}function Ar(t,e,r){var n=void 0!==t.base?t.base:1;if("number"!==vr(r))return br(t.default,e.default);var i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];var a=ge(t.stops.map(function(t){return t[0]}),r),o=function(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),s=t.stops[a][1],u=t.stops[a+1][1],l=Ae[e.type]||xr;if(t.colorSpace&&"rgb"!==t.colorSpace){var p=qe[t.colorSpace];l=function(t,e){return p.reverse(p.interpolate(p.forward(t),p.forward(e),o))};}return "function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=s.evaluate.apply(void 0,t),n=u.evaluate.apply(void 0,t);if(void 0!==r&&void 0!==n)return l(r,n,o)}}:l(s,u,o)}function kr(t,e,r){return "color"===e.type?r=Ht.parse(r):"formatted"===e.type?r=Wt.fromString(r.toString()):vr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),br(r,t.default,e.default)}ce.register(sr,{error:[{kind:"error"},[Lt],function(t,e){var r=e[0];throw new ne(r.evaluate(t))}],typeof:[Lt,[jt],function(t,e){return Xt(te(e[0].evaluate(t)))}],"to-rgba":[Kt(Ot,4),[Ut],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Ut,[Ot,Ot,Ot],ur],rgba:[Ut,[Ot,Ot,Ot,Ot],ur],has:{type:Dt,overloads:[[[Lt],function(t,e){return lr(e[0].evaluate(t),t.properties())}],[[Lt,Rt],function(t,e){var r=e[0],n=e[1];return lr(r.evaluate(t),n.evaluate(t))}]]},get:{type:jt,overloads:[[[Lt],function(t,e){return pr(e[0].evaluate(t),t.properties())}],[[Lt,Rt],function(t,e){var r=e[0],n=e[1];return pr(r.evaluate(t),n.evaluate(t))}]]},"feature-state":[jt,[Lt],function(t,e){return pr(e[0].evaluate(t),t.featureState||{})}],properties:[Rt,[],function(t){return t.properties()}],"geometry-type":[Lt,[],function(t){return t.geometryType()}],id:[jt,[],function(t){return t.id()}],zoom:[Ot,[],function(t){return t.globals.zoom}],"heatmap-density":[Ot,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Ot,[],function(t){return t.globals.lineProgress||0}],accumulated:[jt,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Ot,cr(Ot),function(t,e){for(var r=0,n=0,i=e;n<i.length;n+=1){r+=i[n].evaluate(t);}return r}],"*":[Ot,cr(Ot),function(t,e){for(var r=1,n=0,i=e;n<i.length;n+=1){r*=i[n].evaluate(t);}return r}],"-":{type:Ot,overloads:[[[Ot,Ot],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)-n.evaluate(t)}],[[Ot],function(t,e){return -e[0].evaluate(t)}]]},"/":[Ot,[Ot,Ot],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)/n.evaluate(t)}],"%":[Ot,[Ot,Ot],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)%n.evaluate(t)}],ln2:[Ot,[],function(){return Math.LN2}],pi:[Ot,[],function(){return Math.PI}],e:[Ot,[],function(){return Math.E}],"^":[Ot,[Ot,Ot],function(t,e){var r=e[0],n=e[1];return Math.pow(r.evaluate(t),n.evaluate(t))}],sqrt:[Ot,[Ot],function(t,e){var r=e[0];return Math.sqrt(r.evaluate(t))}],log10:[Ot,[Ot],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN10}],ln:[Ot,[Ot],function(t,e){var r=e[0];return Math.log(r.evaluate(t))}],log2:[Ot,[Ot],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN2}],sin:[Ot,[Ot],function(t,e){var r=e[0];return Math.sin(r.evaluate(t))}],cos:[Ot,[Ot],function(t,e){var r=e[0];return Math.cos(r.evaluate(t))}],tan:[Ot,[Ot],function(t,e){var r=e[0];return Math.tan(r.evaluate(t))}],asin:[Ot,[Ot],function(t,e){var r=e[0];return Math.asin(r.evaluate(t))}],acos:[Ot,[Ot],function(t,e){var r=e[0];return Math.acos(r.evaluate(t))}],atan:[Ot,[Ot],function(t,e){var r=e[0];return Math.atan(r.evaluate(t))}],min:[Ot,cr(Ot),function(t,e){return Math.min.apply(Math,e.map(function(e){return e.evaluate(t)}))}],max:[Ot,cr(Ot),function(t,e){return Math.max.apply(Math,e.map(function(e){return e.evaluate(t)}))}],abs:[Ot,[Ot],function(t,e){var r=e[0];return Math.abs(r.evaluate(t))}],round:[Ot,[Ot],function(t,e){var r=e[0].evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[Ot,[Ot],function(t,e){var r=e[0];return Math.floor(r.evaluate(t))}],ceil:[Ot,[Ot],function(t,e){var r=e[0];return Math.ceil(r.evaluate(t))}],"filter-==":[Dt,[Lt,jt],function(t,e){var r=e[0],n=e[1];return t.properties()[r.value]===n.value}],"filter-id-==":[Dt,[jt],function(t,e){var r=e[0];return t.id()===r.value}],"filter-type-==":[Dt,[Lt],function(t,e){var r=e[0];return t.geometryType()===r.value}],"filter-<":[Dt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<a}],"filter-id-<":[Dt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<i}],"filter->":[Dt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>a}],"filter-id->":[Dt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>i}],"filter-<=":[Dt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<=a}],"filter-id-<=":[Dt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<=i}],"filter->=":[Dt,[Lt,jt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>=a}],"filter-id->=":[Dt,[jt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>=i}],"filter-has":[Dt,[jt],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[Dt,[],function(t){return null!==t.id()}],"filter-type-in":[Dt,[Kt(Lt)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[Dt,[Kt(jt)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[Dt,[Lt,Kt(jt)],function(t,e){var r=e[0];return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[Dt,[Lt,Kt(jt)],function(t,e){var r=e[0],n=e[1];return function(t,e,r,n){for(;r<=n;){var i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[r.value],n.value,0,n.value.length-1)}],all:{type:Dt,overloads:[[[Dt,Dt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)&&n.evaluate(t)}],[cr(Dt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(!n[r].evaluate(t))return !1}return !0}]]},any:{type:Dt,overloads:[[[Dt,Dt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)||n.evaluate(t)}],[cr(Dt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(n[r].evaluate(t))return !0}return !1}]]},"!":[Dt,[Dt],function(t,e){return !e[0].evaluate(t)}],"is-supported-script":[Dt,[Lt],function(t,e){var r=e[0],n=t.globals&&t.globals.isSupportedScript;return !n||n(r.evaluate(t))}],upcase:[Lt,[Lt],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[Lt,[Lt],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[Lt,cr(jt),function(t,e){return e.map(function(e){return ee(e.evaluate(t))}).join("")}],"resolved-locale":[Lt,[qt],function(t,e){return e[0].evaluate(t).resolvedLocale()}]});var Sr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new pe,this._defaultValue=e?function(t){return "color"===t.type&&gr(t.default)?new Ht(0,0,0,0):"color"===t.type?Ht.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;};function zr(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in sr}function Ir(t,e){var r=new ve(sr,[],e?function(t){var e={color:Ut,string:Lt,number:Ot,enum:Lt,boolean:Dt,formatted:Nt};if("array"===t.type)return Kt(e[t.value]||jt,t.length);return e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?hr(new Sr(n,e)):fr(r.errors)}Sr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.formattedSection=n,this.expression.evaluate(this._evaluator)},Sr.prototype.evaluate=function(t,e,r,n){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.formattedSection=n||null;try{var i=this.expression.evaluate(this._evaluator);if(null==i)return this._defaultValue;if(this._enumValues&&!(i in this._enumValues))throw new ne("Expected value to be one of "+Object.keys(this._enumValues).map(function(t){return JSON.stringify(t)}).join(", ")+", but found "+JSON.stringify(i)+" instead.");return i}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}};var Cr=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!ye(e.expression);};Cr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n)},Cr.prototype.evaluate=function(t,e,r,n){return this._styleExpression.evaluate(t,e,r,n)};var Br=function(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!ye(e.expression),this.interpolationType=n;};function Er(t,e){if("error"===(t=Ir(t,e)).result)return t;var r=t.value.expression,n=fe(r);if(!n&&!yr(e))return fr([new Tt("","data expressions not supported")]);var i=de(r,["zoom"]);if(!i&&!dr(e))return fr([new Tt("","zoom expressions not supported")]);var a=function t(e){var r=null;if(e instanceof Ze)r=t(e.result);else if(e instanceof Xe)for(var n=0,i=e.args;n<i.length;n+=1){var a=i[n];if(r=t(a))break}else(e instanceof xe||e instanceof Ne)&&e.input instanceof ce&&"zoom"===e.input.name&&(r=e);if(r instanceof Tt)return r;e.eachChild(function(e){var n=t(e);n instanceof Tt?r=n:!r&&n?r=new Tt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new Tt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));});return r}(r);if(!a&&!i)return fr([new Tt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);if(a instanceof Tt)return fr([a]);if(a instanceof Ne&&!mr(e))return fr([new Tt("",'"interpolate" expressions cannot be used with this property')]);if(!a)return hr(new Cr(n?"constant":"source",t.value));var o=a instanceof Ne?a.interpolation:void 0;return hr(new Br(n?"camera":"composite",t.value,a.labels,o))}Br.prototype.evaluateWithoutErrorHandling=function(t,e,r,n){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n)},Br.prototype.evaluate=function(t,e,r,n){return this._styleExpression.evaluate(t,e,r,n)},Br.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?Ne.interpolationFactor(this.interpolationType,t,e,r):0};var Pr=function(t,e){this._parameters=t,this._specification=e,Bt(this,function t(e,r){var n,i,a,o="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],u=s||void 0!==e.property,l=s||!u,p=e.type||(mr(r)?"exponential":"interval");if(o&&((e=Bt({},e)).stops&&(e.stops=e.stops.map(function(t){return [t[0],Ht.parse(t[1])]})),e.default?e.default=Ht.parse(e.default):e.default=Ht.parse(r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!qe[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);if("exponential"===p)n=Ar;else if("interval"===p)n=wr;else if("categorical"===p){n=_r,i=Object.create(null);for(var c=0,h=e.stops;c<h.length;c+=1){var f=h[c];i[f[0]]=f[1];}a=typeof e.stops[0][0];}else{if("identity"!==p)throw new Error('Unknown function type "'+p+'"');n=kr;}if(s){for(var y={},d=[],m=0;m<e.stops.length;m++){var v=e.stops[m],g=v[0].zoom;void 0===y[g]&&(y[g]={zoom:g,type:e.type,property:e.property,default:e.default,stops:[]},d.push(g)),y[g].stops.push([v[0].value,v[1]]);}for(var x=[],b=0,_=d;b<_.length;b+=1){var w=_[b];x.push([y[w].zoom,t(y[w],r)]);}var A={name:"linear"};return {kind:"composite",interpolationType:A,interpolationFactor:Ne.interpolationFactor.bind(void 0,A),zoomStops:x.map(function(t){return t[0]}),evaluate:function(t,n){var i=t.zoom;return Ar({stops:x,base:e.base},r,i).evaluate(i,n)}}}if(l){var k="exponential"===p?{name:"exponential",base:void 0!==e.base?e.base:1}:null;return {kind:"camera",interpolationType:k,interpolationFactor:Ne.interpolationFactor.bind(void 0,k),zoomStops:e.stops.map(function(t){return t[0]}),evaluate:function(t){var o=t.zoom;return n(e,r,o,i,a)}}}return {kind:"source",evaluate:function(t,o){var s=o&&o.properties?o.properties[e.property]:void 0;return void 0===s?br(e.default,r.default):n(e,r,s,i,a)}}}(this._parameters,this._specification));};function Mr(t){var e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,o=t.styleSpec,s=[],u=vr(r);if("object"!==u)return [new It(e,r,"object expected, "+u+" found")];for(var l in r){var p=l.split(".")[0],c=n[p]||n["*"],h=void 0;if(i[p])h=i[p];else if(n[p])h=rn;else if(i["*"])h=i["*"];else{if(!n["*"]){s.push(new It(e,r[l],'unknown property "'+l+'"'));continue}h=rn;}s=s.concat(h({key:(e?e+".":e)+l,value:r[l],valueSpec:c,style:a,styleSpec:o,object:r,objectKey:l},r));}for(var f in n)i[f]||n[f].required&&void 0===n[f].default&&void 0===r[f]&&s.push(new It(e,r,'missing required property "'+f+'"'));return s}function Tr(t){var e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,o=t.arrayElementValidator||rn;if("array"!==vr(e))return [new It(a,e,"array expected, "+vr(e)+" found")];if(r.length&&e.length!==r.length)return [new It(a,e,"array length "+r.length+" expected, length "+e.length+" found")];if(r["min-length"]&&e.length<r["min-length"])return [new It(a,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")];var s={type:r.value,values:r.values};i.$version<7&&(s.function=r.function),"object"===vr(r.value)&&(s=r.value);for(var u=[],l=0;l<e.length;l++)u=u.concat(o({array:e,arrayIndex:l,value:e[l],valueSpec:s,style:n,styleSpec:i,key:a+"["+l+"]"}));return u}function Vr(t){var e=t.key,r=t.value,n=t.valueSpec,i=vr(r);return "number"!==i?[new It(e,r,"number expected, "+i+" found")]:"minimum"in n&&r<n.minimum?[new It(e,r,r+" is less than the minimum value "+n.minimum)]:"maximum"in n&&r>n.maximum?[new It(e,r,r+" is greater than the maximum value "+n.maximum)]:[]}function Fr(t){var e,r,n,i=t.valueSpec,a=Pt(t.value.type),o={},s="categorical"!==a&&void 0===t.value.property,u=!s,l="array"===vr(t.value.stops)&&"array"===vr(t.value.stops[0])&&"object"===vr(t.value.stops[0][0]),p=Mr({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===a)return [new It(t.key,t.value,'identity function may not have a "stops" property')];var e=[],r=t.value;e=e.concat(Tr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:c})),"array"===vr(r)&&0===r.length&&e.push(new It(t.key,r,"array must have at least one stop"));return e},default:function(t){return rn({key:t.key,value:t.value,valueSpec:i,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===a&&s&&p.push(new It(t.key,t.value,'missing required property "property"')),"identity"===a||t.value.stops||p.push(new It(t.key,t.value,'missing required property "stops"')),"exponential"===a&&t.valueSpec.expression&&!mr(t.valueSpec)&&p.push(new It(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(u&&!yr(t.valueSpec)?p.push(new It(t.key,t.value,"property functions not supported")):s&&!dr(t.valueSpec)&&p.push(new It(t.key,t.value,"zoom functions not supported"))),"categorical"!==a&&!l||void 0!==t.value.property||p.push(new It(t.key,t.value,'"property" property is required')),p;function c(t){var e=[],a=t.value,s=t.key;if("array"!==vr(a))return [new It(s,a,"array expected, "+vr(a)+" found")];if(2!==a.length)return [new It(s,a,"array length 2 expected, length "+a.length+" found")];if(l){if("object"!==vr(a[0]))return [new It(s,a,"object expected, "+vr(a[0])+" found")];if(void 0===a[0].zoom)return [new It(s,a,"object stop key must have zoom")];if(void 0===a[0].value)return [new It(s,a,"object stop key must have value")];if(n&&n>Pt(a[0].zoom))return [new It(s,a[0].zoom,"stop zoom values must appear in ascending order")];Pt(a[0].zoom)!==n&&(n=Pt(a[0].zoom),r=void 0,o={}),e=e.concat(Mr({key:s+"[0]",value:a[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Vr,value:h}}));}else e=e.concat(h({key:s+"[0]",value:a[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},a));return zr(Mt(a[1]))?e.concat([new It(s+"[1]",a[1],"expressions are not allowed in function stops.")]):e.concat(rn({key:s+"[1]",value:a[1],valueSpec:i,style:t.style,styleSpec:t.styleSpec}))}function h(t,n){var s=vr(t.value),u=Pt(t.value),l=null!==t.value?t.value:n;if(e){if(s!==e)return [new It(t.key,l,s+" stop domain type must match previous stop domain type "+e)]}else e=s;if("number"!==s&&"string"!==s&&"boolean"!==s)return [new It(t.key,l,"stop domain value must be a number, string, or boolean")];if("number"!==s&&"categorical"!==a){var p="number expected, "+s+" found";return yr(i)&&void 0===a&&(p+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new It(t.key,l,p)]}return "categorical"!==a||"number"!==s||isFinite(u)&&Math.floor(u)===u?"categorical"!==a&&"number"===s&&void 0!==r&&u<r?[new It(t.key,l,"stop domain values must appear in ascending order")]:(r=u,"categorical"===a&&u in o?[new It(t.key,l,"stop domain values must be unique")]:(o[u]=!0,[])):[new It(t.key,l,"integer expected, found "+u)]}}function Or(t){var e=("property"===t.expressionContext?Er:Ir)(Mt(t.value),t.valueSpec);if("error"===e.result)return e.value.map(function(e){return new It(""+t.key+e.key,t.value,e.message)});var r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&-1!==r.possibleOutputs().indexOf(void 0))return [new It(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')];if("property"===t.expressionContext&&"layout"===t.propertyType&&!ye(r))return [new It(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!ye(r))return [new It(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!de(r,["zoom","feature-state"]))return [new It(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!fe(r))return [new It(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function Lr(t){var e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(Pt(r))&&i.push(new It(e,r,"expected one of ["+n.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(n.values).indexOf(Pt(r))&&i.push(new It(e,r,"expected one of ["+Object.keys(n.values).join(", ")+"], "+JSON.stringify(r)+" found")),i}function Dr(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var n=r[e];if(!Dr(n)&&"boolean"!=typeof n)return !1}return !0;default:return !0}}Pr.deserialize=function(t){return new Pr(t._parameters,t._specification)},Pr.serialize=function(t){return {_parameters:t._parameters,_specification:t._specification}};var Ur={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function Rr(t){if(null==t)return function(){return !0};Dr(t)||(t=qr(t));var e=Ir(t,Ur);if("error"===e.result)throw new Error(e.value.map(function(t){return t.key+": "+t.message}).join(", "));return function(t,r){return e.value.evaluate(t,r)}}function jr(t,e){return t<e?-1:t>e?1:0}function qr(t){if(!t)return !0;var e,r=t[0];return t.length<=1?"any"!==r:"=="===r?Nr(t[1],t[2],"=="):"!="===r?Zr(Nr(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?Nr(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(qr))):"all"===r?["all"].concat(t.slice(1).map(qr)):"none"===r?["all"].concat(t.slice(1).map(qr).map(Zr)):"in"===r?Kr(t[1],t.slice(2)):"!in"===r?Zr(Kr(t[1],t.slice(2))):"has"===r?Xr(t[1]):"!has"!==r||Zr(Xr(t[1]))}function Nr(t,e,r){switch(t){case"$type":return ["filter-type-"+r,e];case"$id":return ["filter-id-"+r,e];default:return ["filter-"+r,t,e]}}function Kr(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some(function(t){return typeof t!=typeof e[0]})?["filter-in-large",t,["literal",e.sort(jr)]]:["filter-in-small",t,["literal",e]]}}function Xr(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function Zr(t){return ["!",t]}function Gr(t){return Dr(Mt(t.value))?Or(Bt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value;var n=e.key;if("array"!==vr(r))return [new It(n,r,"array expected, "+vr(r)+" found")];var i=e.styleSpec;var a;var o=[];if(r.length<1)return [new It(n,r,"filter array must have at least 1 element")];o=o.concat(Lr({key:n+"[0]",value:r[0],valueSpec:i.filter_operator,style:e.style,styleSpec:e.styleSpec}));switch(Pt(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===Pt(r[1])&&o.push(new It(n,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&o.push(new It(n,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(a=vr(r[1]))&&o.push(new It(n+"[1]",r[1],"string expected, "+a+" found"));for(var s=2;s<r.length;s++)a=vr(r[s]),"$type"===Pt(r[1])?o=o.concat(Lr({key:n+"["+s+"]",value:r[s],valueSpec:i.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==a&&"number"!==a&&"boolean"!==a&&o.push(new It(n+"["+s+"]",r[s],"string, number, or boolean expected, "+a+" found"));break;case"any":case"all":case"none":for(var u=1;u<r.length;u++)o=o.concat(t({key:n+"["+u+"]",value:r[u],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":a=vr(r[1]),2!==r.length?o.push(new It(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==a&&o.push(new It(n+"[1]",r[1],"string expected, "+a+" found"));}return o}(t)}function Jr(t,e){var r=t.key,n=t.style,i=t.styleSpec,a=t.value,o=t.objectKey,s=i[e+"_"+t.layerType];if(!s)return [];var u=o.match(/^(.*)-transition$/);if("paint"===e&&u&&s[u[1]]&&s[u[1]].transition)return rn({key:r,value:a,valueSpec:i.transition,style:n,styleSpec:i});var l,p=t.valueSpec||s[o];if(!p)return [new It(r,a,'unknown property "'+o+'"')];if("string"===vr(a)&&yr(p)&&!p.tokens&&(l=/^{([^}]+)}$/.exec(a)))return [new It(r,a,'"'+o+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(l[1])+" }`.")];var c=[];return "symbol"===t.layerType&&("text-field"===o&&n&&!n.glyphs&&c.push(new It(r,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&gr(Mt(a))&&"identity"===Pt(a.type)&&c.push(new It(r,a,'"text-font" does not support identity functions'))),c.concat(rn({key:t.key,value:a,valueSpec:p,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:o}))}function Hr(t){return Jr(t,"paint")}function Yr(t){return Jr(t,"layout")}function $r(t){var e=[],r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new It(n,r,'either "type" or "ref" is required'));var o,s=Pt(r.type),u=Pt(r.ref);if(r.id)for(var l=Pt(r.id),p=0;p<t.arrayIndex;p++){var c=i.layers[p];Pt(c.id)===l&&e.push(new It(n,r.id,'duplicate layer id "'+r.id+'", previously used at line '+c.id.__line__));}if("ref"in r)["type","source","source-layer","filter","layout"].forEach(function(t){t in r&&e.push(new It(n,r[t],'"'+t+'" is prohibited for ref layers'));}),i.layers.forEach(function(t){Pt(t.id)===u&&(o=t);}),o?o.ref?e.push(new It(n,r.ref,"ref cannot reference another ref layer")):s=Pt(o.type):e.push(new It(n,r.ref,'ref layer "'+u+'" not found'));else if("background"!==s)if(r.source){var h=i.sources&&i.sources[r.source],f=h&&Pt(h.type);h?"vector"===f&&"raster"===s?e.push(new It(n,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new It(n,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new It(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new It(n,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new It(n,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new It(n,r.source,'source "'+r.source+'" not found'));}else e.push(new It(n,r,'missing required property "source"'));return e=e.concat(Mr({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return []},type:function(){return rn({key:n+".type",value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:Gr,layout:function(t){return Mr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Yr(Bt({layerType:s},t))}}})},paint:function(t){return Mr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Hr(Bt({layerType:s},t))}}})}}}))}function Wr(t){var e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new It(r,e,'"type" is required')];var a,o=Pt(e.type);switch(o){case"vector":case"raster":case"raster-dem":return a=Mr({key:r,value:e,valueSpec:n["source_"+o.replace("-","_")],style:t.style,styleSpec:n});case"geojson":if(a=Mr({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n}),e.cluster)for(var s in e.clusterProperties){var u=e.clusterProperties[s],l=u[0],p=u[1],c="string"==typeof l?[l,["accumulated"],["get",s]]:l;a.push.apply(a,Or({key:r+"."+s+".map",value:p,expressionContext:"cluster-map"})),a.push.apply(a,Or({key:r+"."+s+".reduce",value:c,expressionContext:"cluster-reduce"}));}return a;case"video":return Mr({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Mr({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new It(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return Lr({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function Qr(t){var e=t.value,r=t.styleSpec,n=r.light,i=t.style,a=[],o=vr(e);if(void 0===e)return a;if("object"!==o)return a=a.concat([new It("light",e,"object expected, "+o+" found")]);for(var s in e){var u=s.match(/^(.*)-transition$/);a=u&&n[u[1]]&&n[u[1]].transition?a.concat(rn({key:s,value:e[s],valueSpec:r.transition,style:i,styleSpec:r})):n[s]?a.concat(rn({key:s,value:e[s],valueSpec:n[s],style:i,styleSpec:r})):a.concat([new It(s,e[s],'unknown property "'+s+'"')]);}return a}function tn(t){var e=t.value,r=t.key,n=vr(e);return "string"!==n?[new It(r,e,"string expected, "+n+" found")]:[]}var en={"*":function(){return []},array:Tr,boolean:function(t){var e=t.value,r=t.key,n=vr(e);return "boolean"!==n?[new It(r,e,"boolean expected, "+n+" found")]:[]},number:Vr,color:function(t){var e=t.key,r=t.value,n=vr(r);return "string"!==n?[new It(e,r,"color expected, "+n+" found")]:null===Jt(r)?[new It(e,r,'color expected, "'+r+'" found')]:[]},constants:Ct,enum:Lr,filter:Gr,function:Fr,layer:$r,object:Mr,source:Wr,light:Qr,string:tn,formatted:function(t){return 0===tn(t).length?[]:Or(t)}};function rn(t){var e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&gr(Pt(e))?Fr(t):r.expression&&zr(Mt(e))?Or(t):r.type&&en[r.type]?en[r.type](t):Mr(Bt({},t,{valueSpec:r.type?n[r.type]:r}))}function nn(t){var e=t.value,r=t.key,n=tn(t);return n.length?n:(-1===e.indexOf("{fontstack}")&&n.push(new It(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new It(r,e,'"glyphs" url must include a "{range}" token')),n)}function an(t,e){e=e||zt;var r=[];return r=r.concat(rn({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:nn,"*":function(){return []}}})),t.constants&&(r=r.concat(Ct({key:"constants",value:t.constants,style:t,styleSpec:e}))),on(r)}function on(t){return [].concat(t).sort(function(t,e){return t.line-e.line})}function sn(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return on(t.apply(this,e))}}an.source=sn(Wr),an.light=sn(Qr),an.layer=sn($r),an.filter=sn(Gr),an.paintProperty=sn(Hr),an.layoutProperty=sn(Yr);var un=an,ln=un.light,pn=un.paintProperty,cn=un.layoutProperty;function hn(t,e){var r=!1;if(e&&e.length)for(var n=0,i=e;n<i.length;n+=1){var a=i[n];t.fire(new kt(new Error(a.message))),r=!0;}return r}var fn=dn,yn=3;function dn(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],e=i[1],r=i[2],this.d=e+2*r;for(var a=0;a<this.d*this.d;a++){var o=i[yn+a],s=i[yn+a+1];n.push(o===s?null:i.subarray(o,s));}var u=i[yn+n.length],l=i[yn+n.length+1];this.keys=i.subarray(u,l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else{this.d=e+2*r;for(var p=0;p<this.d*this.d;p++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}dn.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},dn.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},dn.prototype._insertCell=function(t,e,r,n,i,a){this.cells[i].push(a);},dn.prototype.query=function(t,e,r,n,i){var a=this.min,o=this.max;if(t<=a&&e<=a&&o<=r&&o<=n&&!i)return Array.prototype.slice.call(this.keys);var s=[];return this._forEachCell(t,e,r,n,this._queryCell,s,{},i),s},dn.prototype._queryCell=function(t,e,r,n,i,a,o,s){var u=this.cells[i];if(null!==u)for(var l=this.keys,p=this.bboxes,c=0;c<u.length;c++){var h=u[c];if(void 0===o[h]){var f=4*h;(s?s(p[f+0],p[f+1],p[f+2],p[f+3]):t<=p[f+2]&&e<=p[f+3]&&r>=p[f+0]&&n>=p[f+1])?(o[h]=!0,a.push(l[h])):o[h]=!1;}}},dn.prototype._forEachCell=function(t,e,r,n,i,a,o,s){for(var u=this._convertToCellCoord(t),l=this._convertToCellCoord(e),p=this._convertToCellCoord(r),c=this._convertToCellCoord(n),h=u;h<=p;h++)for(var f=l;f<=c;f++){var y=this.d*f+h;if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&i.call(this,t,e,r,n,y,a,o,s))return}},dn.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},dn.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},dn.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=yn+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var a=e,o=0;o<t.length;o++){var s=t[o];i[yn+o]=a,i.set(s,a),a+=s.length;}return i[yn+t.length]=a,i.set(this.keys,a),a+=this.keys.length,i[yn+t.length+1]=a,i.set(this.bboxes,a),a+=this.bboxes.length,i.buffer};var mn=self.ImageData,vn={};function gn(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),vn[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}for(var xn in gn("Object",Object),fn.serialize=function(t,e){var r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},fn.deserialize=function(t){return new fn(t.buffer)},gn("Grid",fn),gn("Color",Ht),gn("Error",Error),gn("StylePropertyFunction",Pr),gn("StyleExpression",Sr,{omit:["_evaluator"]}),gn("ZoomDependentExpression",Br),gn("ZoomConstantExpression",Cr),gn("CompoundExpression",ce,{omit:["_evaluate"]}),sr)sr[xn]._classRegistryKey||gn("Expression_"+xn,sr[xn]);function bn(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(t instanceof ArrayBuffer)return e&&e.push(t),t;if(ArrayBuffer.isView(t)){var r=t;return e&&e.push(r.buffer),r}if(t instanceof mn)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){for(var n=[],i=0,a=t;i<a.length;i+=1){var o=a[i];n.push(bn(o,e));}return n}if("object"==typeof t){var s=t.constructor,u=s._classRegistryKey;if(!u)throw new Error("can't serialize object of unregistered class");var l=s.serialize?s.serialize(t,e):{};if(!s.serialize){for(var p in t)if(t.hasOwnProperty(p)&&!(vn[u].omit.indexOf(p)>=0)){var c=t[p];l[p]=vn[u].shallow.indexOf(p)>=0?c:bn(c,e);}t instanceof Error&&(l.message=t.message);}if(l.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==u&&(l.$name=u),l}throw new Error("can't serialize object of type "+typeof t)}function _n(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof ArrayBuffer||ArrayBuffer.isView(t)||t instanceof mn)return t;if(Array.isArray(t))return t.map(_n);if("object"==typeof t){var e=t.$name||"Object",r=vn[e].klass;if(!r)throw new Error("can't deserialize unregistered class "+e);if(r.deserialize)return r.deserialize(t);for(var n=Object.create(r.prototype),i=0,a=Object.keys(t);i<a.length;i+=1){var o=a[i];if("$name"!==o){var s=t[o];n[o]=vn[e].shallow.indexOf(o)>=0?s:_n(s);}}return n}throw new Error("can't deserialize object of type "+typeof t)}var wn=function(){this.first=!0;};wn.prototype.update=function(t,e){var r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))};var An={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}};function kn(t){for(var e=0,r=t;e<r.length;e+=1){if(zn(r[e].charCodeAt(0)))return !0}return !1}function Sn(t){return !An.Arabic(t)&&(!An["Arabic Supplement"](t)&&(!An["Arabic Extended-A"](t)&&(!An["Arabic Presentation Forms-A"](t)&&!An["Arabic Presentation Forms-B"](t))))}function zn(t){return 746===t||747===t||!(t<4352)&&(!!An["Bopomofo Extended"](t)||(!!An.Bopomofo(t)||(!(!An["CJK Compatibility Forms"](t)||t>=65097&&t<=65103)||(!!An["CJK Compatibility Ideographs"](t)||(!!An["CJK Compatibility"](t)||(!!An["CJK Radicals Supplement"](t)||(!!An["CJK Strokes"](t)||(!(!An["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||(!!An["CJK Unified Ideographs Extension A"](t)||(!!An["CJK Unified Ideographs"](t)||(!!An["Enclosed CJK Letters and Months"](t)||(!!An["Hangul Compatibility Jamo"](t)||(!!An["Hangul Jamo Extended-A"](t)||(!!An["Hangul Jamo Extended-B"](t)||(!!An["Hangul Jamo"](t)||(!!An["Hangul Syllables"](t)||(!!An.Hiragana(t)||(!!An["Ideographic Description Characters"](t)||(!!An.Kanbun(t)||(!!An["Kangxi Radicals"](t)||(!!An["Katakana Phonetic Extensions"](t)||(!(!An.Katakana(t)||12540===t)||(!(!An["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||(!(!An["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(!!An["Unified Canadian Aboriginal Syllabics"](t)||(!!An["Unified Canadian Aboriginal Syllabics Extended"](t)||(!!An["Vertical Forms"](t)||(!!An["Yijing Hexagram Symbols"](t)||(!!An["Yi Syllables"](t)||!!An["Yi Radicals"](t))))))))))))))))))))))))))))))}function In(t){return !(zn(t)||function(t){return !(!An["Latin-1 Supplement"](t)||167!==t&&169!==t&&174!==t&&177!==t&&188!==t&&189!==t&&190!==t&&215!==t&&247!==t)||(!(!An["General Punctuation"](t)||8214!==t&&8224!==t&&8225!==t&&8240!==t&&8241!==t&&8251!==t&&8252!==t&&8258!==t&&8263!==t&&8264!==t&&8265!==t&&8273!==t)||(!!An["Letterlike Symbols"](t)||(!!An["Number Forms"](t)||(!(!An["Miscellaneous Technical"](t)||!(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215))||(!(!An["Control Pictures"](t)||9251===t)||(!!An["Optical Character Recognition"](t)||(!!An["Enclosed Alphanumerics"](t)||(!!An["Geometric Shapes"](t)||(!(!An["Miscellaneous Symbols"](t)||t>=9754&&t<=9759)||(!(!An["Miscellaneous Symbols and Arrows"](t)||!(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243))||(!!An["CJK Symbols and Punctuation"](t)||(!!An.Katakana(t)||(!!An["Private Use Area"](t)||(!!An["CJK Compatibility Forms"](t)||(!!An["Small Form Variants"](t)||(!!An["Halfwidth and Fullwidth Forms"](t)||(8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)))))))))))))))))}(t))}function Cn(t,e){return !(!e&&(t>=1424&&t<=2303||An["Arabic Presentation Forms-A"](t)||An["Arabic Presentation Forms-B"](t)))&&!(t>=2304&&t<=3583||t>=3840&&t<=4255||An.Khmer(t))}var Bn,En=!1,Pn=null,Mn=!1,Tn=new St,Vn={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return Mn||null!=Vn.applyArabicShaping}},Fn=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new wn,this.transition={});};Fn.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,n=t;r<n.length;r+=1){if(!Cn(n[r].charCodeAt(0),e))return !1}return !0}(t,Vn.isLoaded())},Fn.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},Fn.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}};var On=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(gr(t))return new Pr(t,e);if(zr(t)){var r=Er(t,e);if("error"===r.result)throw new Error(r.value.map(function(t){return t.key+": "+t.message}).join(", "));return r.value}var n=t;return "string"==typeof t&&"color"===e.type&&(n=Ht.parse(t)),{kind:"constant",evaluate:function(){return n}}}(void 0===e?t.specification.default:e,t.specification);};On.prototype.isDataDriven=function(){return "source"===this.expression.kind||"composite"===this.expression.kind},On.prototype.possiblyEvaluate=function(t){return this.property.possiblyEvaluate(this,t)};var Ln=function(t){this.property=t,this.value=new On(t,void 0);};Ln.prototype.transitioned=function(t,e){return new Un(this.property,this.value,e,c({},t.transition,this.transition),t.now)},Ln.prototype.untransitioned=function(){return new Un(this.property,this.value,null,{},0)};var Dn=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);};Dn.prototype.getValue=function(t){return b(this._values[t].value.value)},Dn.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Ln(this._values[t].property)),this._values[t].value=new On(this._values[t].property,null===e?void 0:b(e));},Dn.prototype.getTransition=function(t){return b(this._values[t].transition)},Dn.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Ln(this._values[t].property)),this._values[t].transition=b(e)||void 0;},Dn.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);var a=this.getTransition(n);void 0!==a&&(t[n+"-transition"]=a);}return t},Dn.prototype.transitioned=function(t,e){for(var r=new Rn(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].transitioned(t,e._values[a]);}return r},Dn.prototype.untransitioned=function(){for(var t=new Rn(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e];t._values[n]=this._values[n].untransitioned();}return t};var Un=function(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);};Un.prototype.possiblyEvaluate=function(t){var e=t.now||0,r=this.value.possiblyEvaluate(t),n=this.prior;if(n){if(e>this.end)return this.prior=null,r;if(this.value.isDataDriven())return this.prior=null,r;if(e<this.begin)return n.possiblyEvaluate(t);var i=(e-this.begin)/(this.end-this.begin);return this.property.interpolate(n.possiblyEvaluate(t),r,function(t){if(t<=0)return 0;if(t>=1)return 1;var e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(i))}return r};var Rn=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);};Rn.prototype.possiblyEvaluate=function(t){for(var e=new Nn(this._properties),r=0,n=Object.keys(this._values);r<n.length;r+=1){var i=n[r];e._values[i]=this._values[i].possiblyEvaluate(t);}return e},Rn.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1){var r=e[t];if(this._values[r].prior)return !0}return !1};var jn=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);};jn.prototype.getValue=function(t){return b(this._values[t].value)},jn.prototype.setValue=function(t,e){this._values[t]=new On(this._values[t].property,null===e?void 0:b(e));},jn.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);}return t},jn.prototype.possiblyEvaluate=function(t){for(var e=new Nn(this._properties),r=0,n=Object.keys(this._values);r<n.length;r+=1){var i=n[r];e._values[i]=this._values[i].possiblyEvaluate(t);}return e};var qn=function(t,e,r){this.property=t,this.value=e,this.parameters=r;};qn.prototype.isConstant=function(){return "constant"===this.value.kind},qn.prototype.constantOr=function(t){return "constant"===this.value.kind?this.value.value:t},qn.prototype.evaluate=function(t,e){return this.property.evaluate(this.value,this.parameters,t,e)};var Nn=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);};Nn.prototype.get=function(t){return this._values[t]};var Kn=function(t){this.specification=t;};Kn.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},Kn.prototype.interpolate=function(t,e,r){var n=Ae[this.specification.type];return n?n(t,e,r):t};var Xn=function(t,e){this.specification=t,this.overrides=e;};Xn.prototype.possiblyEvaluate=function(t,e){return "constant"===t.expression.kind||"camera"===t.expression.kind?new qn(this,{kind:"constant",value:t.expression.evaluate(e)},e):new qn(this,t.expression,e)},Xn.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new qn(this,{kind:"constant",value:void 0},t.parameters);var n=Ae[this.specification.type];return n?new qn(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t},Xn.prototype.evaluate=function(t,e,r,n){return "constant"===t.kind?t.value:t.evaluate(e,r,n)};var Zn=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(t,e){if(void 0===t.value)return new qn(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){var r=t.expression.evaluate(e),n=this._calculate(r,r,r,e);return new qn(this,{kind:"constant",value:n},e)}if("camera"===t.expression.kind){var i=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new qn(this,{kind:"constant",value:i},e)}return new qn(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,n){if("source"===t.kind){var i=t.evaluate(e,r,n);return this._calculate(i,i,i,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value},e.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(Xn),Gn=function(t){this.specification=t;};Gn.prototype.possiblyEvaluate=function(t,e){if(void 0!==t.value){if("constant"===t.expression.kind){var r=t.expression.evaluate(e);return this._calculate(r,r,r,e)}return this._calculate(t.expression.evaluate(new Fn(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Fn(Math.floor(e.zoom),e)),t.expression.evaluate(new Fn(Math.floor(e.zoom+1),e)),e)}},Gn.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},Gn.prototype.interpolate=function(t){return t};var Jn=function(t){this.specification=t;};Jn.prototype.possiblyEvaluate=function(t,e){return !!t.expression.evaluate(e)},Jn.prototype.interpolate=function(){return !1};var Hn=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e];r.specification.overridable&&this.overridableProperties.push(e);var n=this.defaultPropertyValues[e]=new On(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new Ln(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}};gn("DataDrivenProperty",Xn),gn("DataConstantProperty",Kn),gn("CrossFadedDataDrivenProperty",Zn),gn("CrossFadedProperty",Gn),gn("ColorRampProperty",Jn);var Yn=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter=function(){return !0},"custom"!==e.type&&(e=e,this.metadata=e.metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new jn(r.layout)),r.paint)){for(var n in this._transitionablePaint=new Dn(r.paint),e.paint)this.setPaintProperty(n,e.paint[n],{validate:!1});for(var i in e.layout)this.setLayoutProperty(i,e.layout[i],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned();}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".layout."+t;if(this._validate(cn,n,t,e,r))return}"visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e;},e.prototype.getPaintProperty=function(t){return v(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".paint."+t;if(this._validate(pn,n,t,e,r))return !1}if(v(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1;var i=this._transitionablePaint._values[t],a="cross-faded-data-driven"===i.property.specification["property-type"],o=i.value.isDataDriven(),s=i.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);var u=this._transitionablePaint._values[t].value;return u.isDataDriven()||o||a||this._handleOverridablePaintPropertyUpdate(t,s,u)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return !1},e.prototype.isHidden=function(t){return !!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility)},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t)),this.paint=this._transitioningPaint.possiblyEvaluate(t);},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),x(t,function(t,e){return !(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)})},e.prototype._validate=function(t,e,r,n,i){return void 0===i&&(i={}),(!i||!1!==i.validate)&&hn(this,t.call(un,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:zt,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return !1},e.prototype.isTileClipped=function(){return !1},e.prototype.hasOffscreenPass=function(){return !1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t);if(e instanceof qn&&yr(e.property.specification)&&(("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent))return !0}return !1},e}(St),$n={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},Wn=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;},Qn=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0);};function ti(t,e){void 0===e&&(e=1);var r=0,n=0;return {members:t.map(function(t){var i,a=(i=t.type,$n[i].BYTES_PER_ELEMENT),o=r=ei(r,Math.max(e,a)),s=t.components||1;return n=Math.max(n,a),r+=a*s,{name:t.name,type:t.type,components:s,offset:o}}),size:ei(r,Math.max(n,e)),alignment:e}}function ei(t,e){return Math.ceil(t/e)*e}Qn.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},Qn.deserialize=function(t){var e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},Qn.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());},Qn.prototype.clear=function(){this.length=0;},Qn.prototype.resize=function(t){this.reserve(t),this.length=t;},Qn.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}},Qn.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")};var ri=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t},e}(Qn);ri.prototype.bytesPerElement=4,gn("StructArrayLayout2i4",ri);var ni=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t},e}(Qn);ni.prototype.bytesPerElement=8,gn("StructArrayLayout4i8",ni);var ii=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(Qn);ii.prototype.bytesPerElement=12,gn("StructArrayLayout2i4i12",ii);var ai=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=4*t,u=8*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=a,this.uint8[u+7]=o,t},e}(Qn);ai.prototype.bytesPerElement=8,gn("StructArrayLayout2i4ub8",ai);var oi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s){var u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,o,s)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u){var l=8*t;return this.uint16[l+0]=e,this.uint16[l+1]=r,this.uint16[l+2]=n,this.uint16[l+3]=i,this.uint16[l+4]=a,this.uint16[l+5]=o,this.uint16[l+6]=s,this.uint16[l+7]=u,t},e}(Qn);oi.prototype.bytesPerElement=16,gn("StructArrayLayout8ui16",oi);var si=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s){var u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,o,s)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u){var l=8*t;return this.int16[l+0]=e,this.int16[l+1]=r,this.int16[l+2]=n,this.int16[l+3]=i,this.uint16[l+4]=a,this.uint16[l+5]=o,this.uint16[l+6]=s,this.uint16[l+7]=u,t},e}(Qn);si.prototype.bytesPerElement=16,gn("StructArrayLayout4i4ui16",si);var ui=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t},e}(Qn);ui.prototype.bytesPerElement=12,gn("StructArrayLayout3f12",ui);var li=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint32[r+0]=e,t},e}(Qn);li.prototype.bytesPerElement=4,gn("StructArrayLayout1ul4",li);var pi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p){var c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,a,o,s,u,l,p)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=12*t,f=6*t;return this.int16[h+0]=e,this.int16[h+1]=r,this.int16[h+2]=n,this.int16[h+3]=i,this.int16[h+4]=a,this.int16[h+5]=o,this.uint32[f+3]=s,this.uint16[h+8]=u,this.uint16[h+9]=l,this.int16[h+10]=p,this.int16[h+11]=c,t},e}(Qn);pi.prototype.bytesPerElement=24,gn("StructArrayLayout6i1ul2ui2i24",pi);var ci=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(Qn);ci.prototype.bytesPerElement=12,gn("StructArrayLayout2i2i2i12",ci);var hi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=12*t,o=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[o+1]=n,this.float32[o+2]=i,t},e}(Qn);hi.prototype.bytesPerElement=12,gn("StructArrayLayout2ub2f12",hi);var fi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d){var m=this.length;return this.resize(m+1),this.emplace(m,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m){var v=22*t,g=11*t,x=44*t;return this.int16[v+0]=e,this.int16[v+1]=r,this.uint16[v+2]=n,this.uint16[v+3]=i,this.uint32[g+2]=a,this.uint32[g+3]=o,this.uint32[g+4]=s,this.uint16[v+10]=u,this.uint16[v+11]=l,this.uint16[v+12]=p,this.float32[g+7]=c,this.float32[g+8]=h,this.uint8[x+36]=f,this.uint8[x+37]=y,this.uint8[x+38]=d,this.uint32[g+10]=m,t},e}(Qn);fi.prototype.bytesPerElement=44,gn("StructArrayLayout2i2ui3ul3ui2f3ub1ul44",fi);var yi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x){var b=this.length;return this.resize(b+1),this.emplace(b,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b){var _=24*t,w=12*t;return this.int16[_+0]=e,this.int16[_+1]=r,this.int16[_+2]=n,this.int16[_+3]=i,this.int16[_+4]=a,this.int16[_+5]=o,this.uint16[_+6]=s,this.uint16[_+7]=u,this.uint16[_+8]=l,this.uint16[_+9]=p,this.uint16[_+10]=c,this.uint16[_+11]=h,this.uint16[_+12]=f,this.uint16[_+13]=y,this.uint16[_+14]=d,this.uint16[_+15]=m,this.uint16[_+16]=v,this.uint32[w+9]=g,this.float32[w+10]=x,this.float32[w+11]=b,t},e}(Qn);yi.prototype.bytesPerElement=48,gn("StructArrayLayout6i11ui1ul2f48",yi);var di=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.float32[r+0]=e,t},e}(Qn);di.prototype.bytesPerElement=4,gn("StructArrayLayout1f4",di);var mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t},e}(Qn);mi.prototype.bytesPerElement=6,gn("StructArrayLayout3i6",mi);var vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=2*t,a=4*t;return this.uint32[i+0]=e,this.uint16[a+2]=r,this.uint16[a+3]=n,t},e}(Qn);vi.prototype.bytesPerElement=8,gn("StructArrayLayout1ul2ui8",vi);var gi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t},e}(Qn);gi.prototype.bytesPerElement=6,gn("StructArrayLayout3ui6",gi);var xi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t},e}(Qn);xi.prototype.bytesPerElement=4,gn("StructArrayLayout2ui4",xi);var bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint16[r+0]=e,t},e}(Qn);bi.prototype.bytesPerElement=2,gn("StructArrayLayout1ui2",bi);var _i=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t},e}(Qn);_i.prototype.bytesPerElement=8,gn("StructArrayLayout2f8",_i);var wi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t},e}(Qn);wi.prototype.bytesPerElement=16,gn("StructArrayLayout4f16",wi);var Ai=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},radius:{configurable:!0},signedDistanceFromAnchor:{configurable:!0},anchorPoint:{configurable:!0}};return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.x1.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.y1.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.x2.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.y2.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.radius.get=function(){return this._structArray.int16[this._pos2+10]},r.radius.set=function(t){this._structArray.int16[this._pos2+10]=t;},r.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},r.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t;},r.anchorPoint.get=function(){return new i(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(Wn);Ai.prototype.size=24;var ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Ai(this,t)},e}(pi);gn("CollisionBoxArray",ki);var Si=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t;},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t;},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t;},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t;},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t;},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t;},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t;},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t;},Object.defineProperties(e.prototype,r),e}(Wn);Si.prototype.size=44;var zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Si(this,t)},e}(fi);gn("PlacedSymbolArray",zi);var Ii=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},radialTextOffset:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.rightJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.centerJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.leftJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.verticalPlacedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.key.get=function(){return this._structArray.uint16[this._pos2+6]},r.key.set=function(t){this._structArray.uint16[this._pos2+6]=t;},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+7]},r.textBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+7]=t;},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.textBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.verticalTextBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.verticalTextBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.iconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.iconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.featureIndex.set=function(t){this._structArray.uint16[this._pos2+13]=t;},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+14]},r.numHorizontalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+14]=t;},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+15]},r.numVerticalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+15]=t;},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+16]},r.numIconVertices.set=function(t){this._structArray.uint16[this._pos2+16]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+9]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+9]=t;},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+10]},r.textBoxScale.set=function(t){this._structArray.float32[this._pos4+10]=t;},r.radialTextOffset.get=function(){return this._structArray.float32[this._pos4+11]},r.radialTextOffset.set=function(t){this._structArray.float32[this._pos4+11]=t;},Object.defineProperties(e.prototype,r),e}(Wn);Ii.prototype.size=48;var Ci=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Ii(this,t)},e}(yi);gn("SymbolInstanceArray",Ci);var Bi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={offsetX:{configurable:!0}};return r.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},r.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t;},Object.defineProperties(e.prototype,r),e}(Wn);Bi.prototype.size=4;var Ei=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e.prototype.get=function(t){return new Bi(this,t)},e}(di);gn("GlyphOffsetArray",Ei);var Pi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={x:{configurable:!0},y:{configurable:!0},tileUnitDistanceFromAnchor:{configurable:!0}};return r.x.get=function(){return this._structArray.int16[this._pos2+0]},r.x.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.y.get=function(){return this._structArray.int16[this._pos2+1]},r.y.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},r.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t;},Object.defineProperties(e.prototype,r),e}(Wn);Pi.prototype.size=6;var Mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e.prototype.get=function(t){return new Pi(this,t)},e}(mi);gn("SymbolLineVertexArray",Mi);var Ti=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}};return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t;},Object.defineProperties(e.prototype,r),e}(Wn);Ti.prototype.size=8;var Vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Ti(this,t)},e}(vi);gn("FeatureIndexArray",Vi);var Fi=ti([{name:"a_pos",components:2,type:"Int16"}],4).members,Oi=function(t){void 0===t&&(t=[]),this.segments=t;};function Li(t,e){return 256*(t=l(Math.floor(t),0,255))+(e=l(Math.floor(e),0,255))}Oi.prototype.prepareSegment=function(t,e,r,n){var i=this.segments[this.segments.length-1];return t>Oi.MAX_VERTEX_ARRAY_LENGTH&&w("Max vertices per segment is "+Oi.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!i||i.vertexLength+t>Oi.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i},Oi.prototype.get=function(){return this.segments},Oi.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t];for(var n in r.vaos)r.vaos[n].destroy();}},Oi.simpleSegment=function(t,e,r,n){return new Oi([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])},Oi.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,gn("SegmentVector",Oi);var Di=function(){this.ids=[],this.positions=[],this.indexed=!1;};function Ui(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}Di.prototype.add=function(t,e,r,n){this.ids.push(t),this.positions.push(e,r,n);},Di.prototype.getPositions=function(t){for(var e=0,r=this.ids.length-1;e<r;){var n=e+r>>1;this.ids[n]>=t?r=n:e=n+1;}for(var i=[];this.ids[e]===t;){var a=this.positions[3*e],o=this.positions[3*e+1],s=this.positions[3*e+2];i.push({index:a,start:o,end:s}),e++;}return i},Di.serialize=function(t,e){var r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return function t(e,r,n,i){if(n>=i)return;var a=e[n+i>>1];var o=n-1;var s=i+1;for(;;){do{o++;}while(e[o]<a);do{s--;}while(e[s]>a);if(o>=s)break;Ui(e,o,s),Ui(r,3*o,3*s),Ui(r,3*o+1,3*s+1),Ui(r,3*o+2,3*s+2);}t(e,r,n,s);t(e,r,s+1,i);}(r,n,0,r.length-1),e.push(r.buffer,n.buffer),{ids:r,positions:n}},Di.deserialize=function(t){var e=new Di;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e},gn("FeaturePositionMap",Di);var Ri=function(t,e){this.gl=t.gl,this.location=e;},ji=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));},e}(Ri),qi=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));},e}(Ri),Ni=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));},e}(Ri),Ki=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));},e}(Ri),Xi=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));},e}(Ri),Zi=function(t){function e(e,r){t.call(this,e,r),this.current=Ht.transparent;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));},e}(Ri),Gi=new Float32Array(16),Ji=function(t){function e(e,r){t.call(this,e,r),this.current=Gi;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}},e}(Ri);function Hi(t){return [Li(255*t.r,255*t.g),Li(255*t.b,255*t.a)]}var Yi=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map(function(t){return "u_"+t}),this.type=r,this.maxValue=-1/0;};Yi.prototype.defines=function(){return this.names.map(function(t){return "#define HAS_UNIFORM_u_"+t})},Yi.prototype.setConstantPatternPositions=function(){},Yi.prototype.populatePaintArray=function(){},Yi.prototype.updatePaintArray=function(){},Yi.prototype.upload=function(){},Yi.prototype.destroy=function(){},Yi.prototype.setUniforms=function(t,e,r,n){e.set(n.constantOr(this.value));},Yi.prototype.getBinding=function(t,e){return "color"===this.type?new Zi(t,e):new qi(t,e)},Yi.serialize=function(t){var e=t.value,r=t.names,n=t.type;return {value:bn(e),names:r,type:n}},Yi.deserialize=function(t){var e=t.value,r=t.names,n=t.type;return new Yi(_n(e),r,n)};var $i=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map(function(t){return "u_"+t}),this.type=r,this.maxValue=-1/0,this.patternPositions={patternTo:null,patternFrom:null};};$i.prototype.defines=function(){return this.names.map(function(t){return "#define HAS_UNIFORM_u_"+t})},$i.prototype.populatePaintArray=function(){},$i.prototype.updatePaintArray=function(){},$i.prototype.upload=function(){},$i.prototype.destroy=function(){},$i.prototype.setConstantPatternPositions=function(t,e){this.patternPositions.patternTo=t.tlbr,this.patternPositions.patternFrom=e.tlbr;},$i.prototype.setUniforms=function(t,e,r,n,i){var a=this.patternPositions;"u_pattern_to"===i&&a.patternTo&&e.set(a.patternTo),"u_pattern_from"===i&&a.patternFrom&&e.set(a.patternFrom);},$i.prototype.getBinding=function(t,e){return new Xi(t,e)};var Wi=function(t,e,r,n){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map(function(t){return "a_"+t}),this.maxValue=-1/0,this.paintVertexAttributes=e.map(function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}}),this.paintVertexArray=new n;};Wi.prototype.defines=function(){return []},Wi.prototype.setConstantPatternPositions=function(){},Wi.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Fn(0),e,{},n);if("color"===this.type)for(var s=Hi(o),u=a;u<t;u++)i.emplaceBack(s[0],s[1]);else{for(var l=a;l<t;l++)i.emplaceBack(o);this.maxValue=Math.max(this.maxValue,o);}},Wi.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:0},r,n);if("color"===this.type)for(var o=Hi(a),s=t;s<e;s++)i.emplace(s,o[0],o[1]);else{for(var u=t;u<e;u++)i.emplace(u,a);this.maxValue=Math.max(this.maxValue,a);}},Wi.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Wi.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Wi.prototype.setUniforms=function(t,e){e.set(0);},Wi.prototype.getBinding=function(t,e){return new qi(t,e)};var Qi=function(t,e,r,n,i,a){this.expression=t,this.names=e,this.uniformNames=this.names.map(function(t){return "u_"+t+"_t"}),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0;var o=a;this.paintVertexAttributes=e.map(function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}}),this.paintVertexArray=new o;};Qi.prototype.defines=function(){return []},Qi.prototype.setConstantPatternPositions=function(){},Qi.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Fn(this.zoom),e,{},n),s=this.expression.evaluate(new Fn(this.zoom+1),e,{},n);if("color"===this.type)for(var u=Hi(o),l=Hi(s),p=a;p<t;p++)i.emplaceBack(u[0],u[1],l[0],l[1]);else{for(var c=a;c<t;c++)i.emplaceBack(o,s);this.maxValue=Math.max(this.maxValue,o,s);}},Qi.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:this.zoom},r,n),o=this.expression.evaluate({zoom:this.zoom+1},r,n);if("color"===this.type)for(var s=Hi(a),u=Hi(o),l=t;l<e;l++)i.emplace(l,s[0],s[1],u[0],u[1]);else{for(var p=t;p<e;p++)i.emplace(p,a,o);this.maxValue=Math.max(this.maxValue,a,o);}},Qi.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Qi.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Qi.prototype.interpolationFactor=function(t){return this.useIntegerZoom?this.expression.interpolationFactor(Math.floor(t),this.zoom,this.zoom+1):this.expression.interpolationFactor(t,this.zoom,this.zoom+1)},Qi.prototype.setUniforms=function(t,e,r){e.set(this.interpolationFactor(r.zoom));},Qi.prototype.getBinding=function(t,e){return new qi(t,e)};var ta=function(t,e,r,n,i,a,o){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map(function(t){return "u_"+t+"_t"}),this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0,this.layerId=o,this.paintVertexAttributes=e.map(function(t){return {name:"a_"+t,type:"Uint16",components:4,offset:0}}),this.zoomInPaintVertexArray=new a,this.zoomOutPaintVertexArray=new a;};ta.prototype.defines=function(){return []},ta.prototype.setConstantPatternPositions=function(){},ta.prototype.populatePaintArray=function(t,e,r){var n=this.zoomInPaintVertexArray,i=this.zoomOutPaintVertexArray,a=this.layerId,o=n.length;if(n.reserve(t),i.reserve(t),r&&e.patterns&&e.patterns[a]){var s=e.patterns[a],u=s.min,l=s.mid,p=s.max,c=r[u],h=r[l],f=r[p];if(!c||!h||!f)return;for(var y=o;y<t;y++)n.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],c.tl[0],c.tl[1],c.br[0],c.br[1]),i.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],f.tl[0],f.tl[1],f.br[0],f.br[1]);}},ta.prototype.updatePaintArray=function(t,e,r,n,i){var a=this.zoomInPaintVertexArray,o=this.zoomOutPaintVertexArray,s=this.layerId;if(i&&r.patterns&&r.patterns[s]){var u=r.patterns[s],l=u.min,p=u.mid,c=u.max,h=i[l],f=i[p],y=i[c];if(!h||!f||!y)return;for(var d=t;d<e;d++)a.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],h.tl[0],h.tl[1],h.br[0],h.br[1]),o.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],y.tl[0],y.tl[1],y.br[0],y.br[1]);}},ta.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},ta.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();},ta.prototype.setUniforms=function(t,e){e.set(0);},ta.prototype.getBinding=function(t,e){return new qi(t,e)};var ea=function(){this.binders={},this.cacheKey="",this._buffers=[],this._featureMap=new Di,this._bufferOffset=0;};ea.createDynamic=function(t,e,r){var n=new ea,i=[];for(var a in t.paint._values)if(r(a)){var o=t.paint.get(a);if(o instanceof qn&&yr(o.property.specification)){var s=na(a,t.type),u=o.property.specification.type,l=o.property.useIntegerZoom;if("cross-faded"===o.property.specification["property-type"]||"cross-faded-data-driven"===o.property.specification["property-type"])if("constant"===o.value.kind)n.binders[a]=new $i(o.value.value,s,u),i.push("/u_"+a);else{var p=ia(a,u,"source");n.binders[a]=new ta(o.value,s,u,l,e,p,t.id),i.push("/a_"+a);}else if("constant"===o.value.kind)n.binders[a]=new Yi(o.value.value,s,u),i.push("/u_"+a);else if("source"===o.value.kind){var c=ia(a,u,"source");n.binders[a]=new Wi(o.value,s,u,c),i.push("/a_"+a);}else{var h=ia(a,u,"composite");n.binders[a]=new Qi(o.value,s,u,l,e,h),i.push("/z_"+a);}}}return n.cacheKey=i.sort().join(""),n},ea.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.binders){this.binders[a].populatePaintArray(t,e,n,i);}void 0!==e.id&&this._featureMap.add(+e.id,r,this._bufferOffset,t),this._bufferOffset=t;},ea.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders){this.binders[r].setConstantPatternPositions(t,e);}},ea.prototype.updatePaintArrays=function(t,e,r,n){var i=!1;for(var a in t)for(var o=0,s=this._featureMap.getPositions(+a);o<s.length;o+=1){var u=s[o],l=e.feature(u.index);for(var p in this.binders){var c=this.binders[p];if(!(c instanceof Yi||c instanceof $i)&&!0===c.expression.isStateDependent){var h=r.paint.get(p);c.expression=h.value,c.updatePaintArray(u.start,u.end,l,t[a],n),i=!0;}}}return i},ea.prototype.defines=function(){var t=[];for(var e in this.binders)t.push.apply(t,this.binders[e].defines());return t},ea.prototype.getPaintVertexBuffers=function(){return this._buffers},ea.prototype.getUniforms=function(t,e){var r=[];for(var n in this.binders)for(var i=this.binders[n],a=0,o=i.uniformNames;a<o.length;a+=1){var s=o[a];if(e[s]){var u=i.getBinding(t,e[s]);r.push({name:s,property:n,binding:u});}}return r},ea.prototype.setUniforms=function(t,e,r,n){for(var i=0,a=e;i<a.length;i+=1){var o=a[i],s=o.name,u=o.property,l=o.binding;this.binders[u].setUniforms(t,l,n,r.get(u),s);}},ea.prototype.updatePatternPaintBuffers=function(t){var e=[];for(var r in this.binders){var n=this.binders[r];if(n instanceof ta){var i=2===t.fromScale?n.zoomInPaintVertexBuffer:n.zoomOutPaintVertexBuffer;i&&e.push(i);}else(n instanceof Wi||n instanceof Qi)&&n.paintVertexBuffer&&e.push(n.paintVertexBuffer);}this._buffers=e;},ea.prototype.upload=function(t){for(var e in this.binders)this.binders[e].upload(t);var r=[];for(var n in this.binders){var i=this.binders[n];(i instanceof Wi||i instanceof Qi)&&i.paintVertexBuffer&&r.push(i.paintVertexBuffer);}this._buffers=r;},ea.prototype.destroy=function(){for(var t in this.binders)this.binders[t].destroy();};var ra=function(t,e,r,n){void 0===n&&(n=function(){return !0}),this.programConfigurations={};for(var i=0,a=e;i<a.length;i+=1){var o=a[i];this.programConfigurations[o.id]=ea.createDynamic(o,r,n),this.programConfigurations[o.id].layoutAttributes=t;}this.needsUpload=!1;};function na(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from"],"fill-pattern":["pattern_to","pattern_from"],"fill-extrusion-pattern":["pattern_to","pattern_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function ia(t,e,r){var n={color:{source:_i,composite:wi},number:{source:di,composite:_i}},i=function(t){return {"line-pattern":{source:oi,composite:oi},"fill-pattern":{source:oi,composite:oi},"fill-extrusion-pattern":{source:oi,composite:oi}}[t]}(t);return i&&i[r]||n[e][r]}ra.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.programConfigurations)this.programConfigurations[a].populatePaintArrays(t,e,r,n,i);this.needsUpload=!0;},ra.prototype.updatePaintArrays=function(t,e,r,n){for(var i=0,a=r;i<a.length;i+=1){var o=a[i];this.needsUpload=this.programConfigurations[o.id].updatePaintArrays(t,e,o,n)||this.needsUpload;}},ra.prototype.get=function(t){return this.programConfigurations[t]},ra.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}},ra.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy();},gn("ConstantBinder",Yi),gn("CrossFadedConstantBinder",$i),gn("SourceExpressionBinder",Wi),gn("CrossFadedCompositeBinder",ta),gn("CompositeExpressionBinder",Qi),gn("ProgramConfiguration",ea,{omit:["_buffers"]}),gn("ProgramConfigurationSet",ra);var aa=8192;var oa,sa=(oa=15,{min:-1*Math.pow(2,oa-1),max:Math.pow(2,oa-1)-1});function ua(t){for(var e=aa/t.extent,r=t.loadGeometry(),n=0;n<r.length;n++)for(var i=r[n],a=0;a<i.length;a++){var o=i[a];o.x=Math.round(o.x*e),o.y=Math.round(o.y*e),(o.x<sa.min||o.x>sa.max||o.y<sa.min||o.y>sa.max)&&(w("Geometry exceeds allowed extent, reduce your vector tile buffer size"),o.x=l(o.x,sa.min,sa.max),o.y=l(o.y,sa.min,sa.max));}return r}function la(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}var pa=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new ri,this.indexArray=new gi,this.segments=new Oi,this.programConfigurations=new ra(Fi,t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id});};function ca(t,e){for(var r=0;r<t.length;r++)if(ba(e,t[r]))return !0;for(var n=0;n<e.length;n++)if(ba(t,e[n]))return !0;return !!da(t,e)}function ha(t,e,r){return !!ba(t,e)||!!va(e,t,r)}function fa(t,e){if(1===t.length)return xa(e,t[0]);for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;i++)if(ba(t,n[i]))return !0;for(var a=0;a<t.length;a++)if(xa(e,t[a]))return !0;for(var o=0;o<e.length;o++)if(da(t,e[o]))return !0;return !1}function ya(t,e,r){if(t.length>1){if(da(t,e))return !0;for(var n=0;n<e.length;n++)if(va(e[n],t,r))return !0}for(var i=0;i<t.length;i++)if(va(t[i],e,r))return !0;return !1}function da(t,e){if(0===t.length||0===e.length)return !1;for(var r=0;r<t.length-1;r++)for(var n=t[r],i=t[r+1],a=0;a<e.length-1;a++){if(ma(n,i,e[a],e[a+1]))return !0}return !1}function ma(t,e,r,n){return A(t,r,n)!==A(e,r,n)&&A(t,e,r)!==A(t,e,n)}function va(t,e,r){var n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(var i=1;i<e.length;i++){if(ga(t,e[i-1],e[i])<n)return !0}return !1}function ga(t,e,r){var n=e.distSqr(r);if(0===n)return t.distSqr(e);var i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return i<0?t.distSqr(e):i>1?t.distSqr(r):t.distSqr(r.sub(e)._mult(i)._add(e))}function xa(t,e){for(var r,n,i,a=!1,o=0;o<t.length;o++)for(var s=0,u=(r=t[o]).length-1;s<r.length;u=s++)n=r[s],i=r[u],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);return a}function ba(t,e){for(var r=!1,n=0,i=t.length-1;n<t.length;i=n++){var a=t[n],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(r=!r);}return r}function _a(t,e,r){var n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;var a=A(t,e,r[0]);return a!==A(t,e,r[1])||a!==A(t,e,r[2])||a!==A(t,e,r[3])}function wa(t,e,r){var n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).binders[t].maxValue}function Aa(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function ka(t,e,r,n,a){if(!e[0]&&!e[1])return t;var o=i.convert(e)._mult(a);"viewport"===r&&o._rotate(-n);for(var s=[],u=0;u<t.length;u++){var l=t[u];s.push(l.sub(o));}return s}pa.prototype.populate=function(t,e){var r=this.layers[0],n=[],i=null;"circle"===r.type&&(i=r.layout.get("circle-sort-key"));for(var a=0,o=t;a<o.length;a+=1){var s=o[a],u=s.feature,l=s.index,p=s.sourceLayerIndex;if(this.layers[0]._featureFilter(new Fn(this.zoom),u)){var c=ua(u),h=i?i.evaluate(u,{}):void 0,f={id:u.id,properties:u.properties,type:u.type,sourceLayerIndex:p,index:l,geometry:c,patterns:{},sortKey:h};n.push(f);}}i&&n.sort(function(t,e){return t.sortKey-e.sortKey});for(var y=0,d=n;y<d.length;y+=1){var m=d[y],v=m,g=v.geometry,x=v.index,b=v.sourceLayerIndex,_=t[x].feature;this.addFeature(m,g,x),e.featureIndex.insert(_,g,x,b,this.index);}},pa.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},pa.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},pa.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},pa.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Fi),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},pa.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},pa.prototype.addFeature=function(t,e,r){for(var n=0,i=e;n<i.length;n+=1)for(var a=0,o=i[n];a<o.length;a+=1){var s=o[a],u=s.x,l=s.y;if(!(u<0||u>=aa||l<0||l>=aa)){var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),c=p.vertexLength;la(this.layoutVertexArray,u,l,-1,-1),la(this.layoutVertexArray,u,l,1,-1),la(this.layoutVertexArray,u,l,1,1),la(this.layoutVertexArray,u,l,-1,1),this.indexArray.emplaceBack(c,c+1,c+2),this.indexArray.emplaceBack(c,c+3,c+2),p.vertexLength+=4,p.primitiveLength+=2;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{});},gn("CircleBucket",pa,{omit:["layers"]});var Sa=new Hn({"circle-sort-key":new Xn(zt.layout_circle["circle-sort-key"])}),za={paint:new Hn({"circle-radius":new Xn(zt.paint_circle["circle-radius"]),"circle-color":new Xn(zt.paint_circle["circle-color"]),"circle-blur":new Xn(zt.paint_circle["circle-blur"]),"circle-opacity":new Xn(zt.paint_circle["circle-opacity"]),"circle-translate":new Kn(zt.paint_circle["circle-translate"]),"circle-translate-anchor":new Kn(zt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new Kn(zt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new Kn(zt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new Xn(zt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new Xn(zt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new Xn(zt.paint_circle["circle-stroke-opacity"])}),layout:Sa},Ia="undefined"!=typeof Float32Array?Float32Array:Array;Math.PI;var Ca,Ba;Ca=new Ia(3),Ia!=Float32Array&&(Ca[0]=0,Ca[1]=0,Ca[2]=0),Ba=Ca;function Ea(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,t}!function(){var t=function(){var t=new Ia(4);return Ia!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}();}();var Pa=function(t){function e(e){t.call(this,e,za);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new pa(t)},e.prototype.queryRadius=function(t){var e=t;return wa("circle-radius",this,e)+wa("circle-stroke-width",this,e)+Aa(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o,s){for(var u=ka(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,o),l=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),p="map"===this.paint.get("circle-pitch-alignment"),c=p?u:function(t,e){return t.map(function(t){return Ma(t,e)})}(u,s),h=p?l*o:l,f=0,y=n;f<y.length;f+=1)for(var d=0,m=y[f];d<m.length;d+=1){var v=m[d],g=p?v:Ma(v,s),x=h,b=Ea([],[v.x,v.y,0,1],s);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?x*=b[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(x*=a.cameraToCenterDistance/b[3]),ha(c,g,x))return !0}return !1},e}(Yn);function Ma(t,e){var r=Ea([],[t.x,t.y,0,1],e);return new i(r[0]/r[3],r[1]/r[3])}var Ta=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(pa);function Va(t,e,r,n){var i=e.width,a=e.height;if(n){if(n instanceof Uint8ClampedArray)n=new Uint8Array(n.buffer);else if(n.length!==i*a*r)throw new RangeError("mismatched image size")}else n=new Uint8Array(i*a*r);return t.width=i,t.height=a,t.data=n,t}function Fa(t,e,r){var n=e.width,i=e.height;if(n!==t.width||i!==t.height){var a=Va({},{width:n,height:i},r);Oa(t,a,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=a.data;}}function Oa(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");for(var o=t.data,s=e.data,u=0;u<i.height;u++)for(var l=((r.y+u)*t.width+r.x)*a,p=((n.y+u)*e.width+n.x)*a,c=0;c<i.width*a;c++)s[p+c]=o[l+c];return e}gn("HeatmapBucket",Ta,{omit:["layers"]});var La=function(t,e){Va(this,t,1,e);};La.prototype.resize=function(t){Fa(this,t,1);},La.prototype.clone=function(){return new La({width:this.width,height:this.height},new Uint8Array(this.data))},La.copy=function(t,e,r,n,i){Oa(t,e,r,n,i,1);};var Da=function(t,e){Va(this,t,4,e);};Da.prototype.resize=function(t){Fa(this,t,4);},Da.prototype.replace=function(t,e){e?this.data.set(t):t instanceof Uint8ClampedArray?this.data=new Uint8Array(t.buffer):this.data=t;},Da.prototype.clone=function(){return new Da({width:this.width,height:this.height},new Uint8Array(this.data))},Da.copy=function(t,e,r,n,i){Oa(t,e,r,n,i,4);},gn("AlphaImage",La),gn("RGBAImage",Da);var Ua={paint:new Hn({"heatmap-radius":new Xn(zt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new Xn(zt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new Kn(zt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new Jn(zt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new Kn(zt.paint_heatmap["heatmap-opacity"])})};function Ra(t,e){for(var r=new Uint8Array(1024),n={},i=0,a=0;i<256;i++,a+=4){n[e]=i/255;var o=t.evaluate(n);r[a+0]=Math.floor(255*o.r/o.a),r[a+1]=Math.floor(255*o.g/o.a),r[a+2]=Math.floor(255*o.b/o.a),r[a+3]=Math.floor(255*o.a);}return new Da({width:256,height:1},r)}var ja=function(t){function e(e){t.call(this,e,Ua),this._updateColorRamp();}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Ta(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp();},e.prototype._updateColorRamp=function(){var t=this._transitionablePaint._values["heatmap-color"].value.expression;this.colorRamp=Ra(t,"heatmapDensity"),this.colorRampTexture=null;},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(Yn),qa={paint:new Hn({"hillshade-illumination-direction":new Kn(zt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new Kn(zt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new Kn(zt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new Kn(zt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new Kn(zt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new Kn(zt.paint_hillshade["hillshade-accent-color"])})},Na=function(t){function e(e){t.call(this,e,qa);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(Yn),Ka=ti([{name:"a_pos",components:2,type:"Int16"}],4).members,Xa=Ga,Za=Ga;function Ga(t,e,r){r=r||2;var n,i,a,o,s,u,l,p=e&&e.length,c=p?e[0]*r:t.length,h=Ja(t,0,c,r,!0),f=[];if(!h||h.next===h.prev)return f;if(p&&(h=function(t,e,r,n){var i,a,o,s,u,l=[];for(i=0,a=e.length;i<a;i++)o=e[i]*n,s=i<a-1?e[i+1]*n:t.length,(u=Ja(t,o,s,n,!1))===u.next&&(u.steiner=!0),l.push(io(u));for(l.sort(eo),i=0;i<l.length;i++)ro(l[i],r),r=Ha(r,r.next);return r}(t,e,h,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var y=r;y<c;y+=r)(s=t[y])<n&&(n=s),(u=t[y+1])<i&&(i=u),s>a&&(a=s),u>o&&(o=u);l=0!==(l=Math.max(a-n,o-i))?1/l:0;}return Ya(h,f,r,n,i,l),f}function Ja(t,e,r,n,i){var a,o;if(i===mo(t,e,r,n)>0)for(a=e;a<r;a+=n)o=ho(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=ho(a,t[a],t[a+1],o);return o&&uo(o,o.next)&&(fo(o),o=o.next),o}function Ha(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!uo(n,n.next)&&0!==so(n.prev,n,n.next))n=n.next;else{if(fo(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function Ya(t,e,r,n,i,a,o){if(t){!o&&a&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=no(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,o,s,u,l=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(u=l;s>0||u>0&&n;)0!==s&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,l*=2;}while(o>1)}(i);}(t,n,i,a);for(var s,u,l=t;t.prev!==t.next;)if(s=t.prev,u=t.next,a?Wa(t,n,i,a):$a(t))e.push(s.i/r),e.push(t.i/r),e.push(u.i/r),fo(t),t=u.next,l=u.next;else if((t=u)===l){o?1===o?Ya(t=Qa(t,e,r),e,r,n,i,a,2):2===o&&to(t,e,r,n,i,a):Ya(Ha(t),e,r,n,i,a,1);break}}}function $a(t){var e=t.prev,r=t,n=t.next;if(so(e,r,n)>=0)return !1;for(var i=t.next.next;i!==t.prev;){if(ao(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&so(i.prev,i,i.next)>=0)return !1;i=i.next;}return !0}function Wa(t,e,r,n){var i=t.prev,a=t,o=t.next;if(so(i,a,o)>=0)return !1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,u=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,p=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,c=no(s,u,e,r,n),h=no(l,p,e,r,n),f=t.prevZ,y=t.nextZ;f&&f.z>=c&&y&&y.z<=h;){if(f!==t.prev&&f!==t.next&&ao(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&so(f.prev,f,f.next)>=0)return !1;if(f=f.prevZ,y!==t.prev&&y!==t.next&&ao(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&so(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}for(;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&ao(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&so(f.prev,f,f.next)>=0)return !1;f=f.prevZ;}for(;y&&y.z<=h;){if(y!==t.prev&&y!==t.next&&ao(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&so(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}return !0}function Qa(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!uo(i,a)&&lo(i,n,n.next,a)&&po(i,a)&&po(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),fo(n),fo(n.next),n=t=a),n=n.next;}while(n!==t);return n}function to(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&oo(o,s)){var u=co(o,s);return o=Ha(o,o.next),u=Ha(u,u.next),Ya(o,e,r,n,i,a),void Ya(u,e,r,n,i,a)}s=s.next;}o=o.next;}while(o!==t)}function eo(t,e){return t.x-e.x}function ro(t,e){if(e=function(t,e){var r,n=e,i=t.x,a=t.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>o){if(o=s,s===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===o)return r.prev;var u,l=r,p=r.x,c=r.y,h=1/0;n=r.next;for(;n!==l;)i>=n.x&&n.x>=p&&i!==n.x&&ao(a<c?i:o,a,p,c,a<c?o:i,a,n.x,n.y)&&((u=Math.abs(a-n.y)/(i-n.x))<h||u===h&&n.x>r.x)&&po(n,t)&&(r=n,h=u),n=n.next;return r}(t,e)){var r=co(e,t);Ha(r,r.next);}}function no(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function io(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function ao(t,e,r,n,i,a,o,s){return (i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function oo(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&lo(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&po(t,e)&&po(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)}function so(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function uo(t,e){return t.x===e.x&&t.y===e.y}function lo(t,e,r,n){return !!(uo(t,e)&&uo(r,n)||uo(t,n)&&uo(r,e))||so(t,e,r)>0!=so(t,e,n)>0&&so(r,n,t)>0!=so(r,n,e)>0}function po(t,e){return so(t.prev,t,t.next)<0?so(t,e,t.next)>=0&&so(t,t.prev,e)>=0:so(t,e,t.prev)<0||so(t,t.next,e)<0}function co(t,e){var r=new yo(t.i,t.x,t.y),n=new yo(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function ho(t,e,r,n){var i=new yo(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function yo(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function mo(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function vo(t,e,r,n,i){!function t(e,r,n,i,a){for(;i>n;){if(i-n>600){var o=i-n+1,s=r-n+1,u=Math.log(o),l=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*l*(o-l)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(r-s*l/o+p)),h=Math.min(i,Math.floor(r+(o-s)*l/o+p));t(e,r,c,h,a);}var f=e[r],y=n,d=i;for(go(e,n,r),a(e[i],f)>0&&go(e,n,i);y<d;){for(go(e,y,d),y++,d--;a(e[y],f)<0;)y++;for(;a(e[d],f)>0;)d--;}0===a(e[n],f)?go(e,n,d):go(e,++d,i),d<=r&&(n=d+1),r<=d&&(i=d-1);}}(t,e,r||0,n||t.length-1,i||xo);}function go(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function xo(t,e){return t<e?-1:t>e?1:0}function bo(t,e){var r=t.length;if(r<=1)return [t];for(var n,i,a=[],o=0;o<r;o++){var s=k(t[o]);0!==s&&(t[o].area=Math.abs(s),void 0===i&&(i=s<0),i===s<0?(n&&a.push(n),n=[t[o]]):n.push(t[o]));}if(n&&a.push(n),e>1)for(var u=0;u<a.length;u++)a[u].length<=e||(vo(a[u],e,1,a[u].length-1,_o),a[u]=a[u].slice(0,e));return a}function _o(t,e){return e.area-t.area}function wo(t,e,r){for(var n=r.patternDependencies,i=!1,a=0,o=e;a<o.length;a+=1){var s=o[a].paint.get(t+"-pattern");s.isConstant()||(i=!0);var u=s.constantOr(null);u&&(i=!0,n[u.to]=!0,n[u.from]=!0);}return i}function Ao(t,e,r,n,i){for(var a=i.patternDependencies,o=0,s=e;o<s.length;o+=1){var u=s[o],l=u.paint.get(t+"-pattern").value;if("constant"!==l.kind){var p=l.evaluate({zoom:n-1},r,{}),c=l.evaluate({zoom:n},r,{}),h=l.evaluate({zoom:n+1},r,{});a[p]=!0,a[c]=!0,a[h]=!0,r.patterns[u.id]={min:p,mid:c,max:h};}}return r}Ga.deviation=function(t,e,r,n){var i=e&&e.length,a=i?e[0]*r:t.length,o=Math.abs(mo(t,0,a,r));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*r,p=s<u-1?e[s+1]*r:t.length;o-=Math.abs(mo(t,l,p,r));}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*r,f=n[s+1]*r,y=n[s+2]*r;c+=Math.abs((t[h]-t[y])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[y+1]-t[h+1]));}return 0===o&&0===c?0:Math.abs((c-o)/o)},Ga.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<e;o++)r.vertices.push(t[i][a][o]);i>0&&(n+=t[i-1].length,r.holes.push(n));}return r},Xa.default=Za;var ko=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new ri,this.indexArray=new gi,this.indexArray2=new xi,this.programConfigurations=new ra(Ka,t.layers,t.zoom),this.segments=new Oi,this.segments2=new Oi,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id});};ko.prototype.populate=function(t,e){this.hasPattern=wo("fill",this.layers,e);for(var r=this.layers[0].layout.get("fill-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.index,l=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Fn(this.zoom),s)){var p=ua(s),c=r?r.evaluate(s,{}):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:l,index:u,geometry:p,patterns:{},sortKey:c};n.push(h);}}r&&n.sort(function(t,e){return t.sortKey-e.sortKey});for(var f=0,y=n;f<y.length;f+=1){var d=y[f],m=d,v=m.geometry,g=m.index,x=m.sourceLayerIndex;if(this.hasPattern){var b=Ao("fill",this.layers,d,this.zoom,e);this.patternFeatures.push(b);}else this.addFeature(d,v,g,{});var _=t[g].feature;e.featureIndex.insert(_,v,g,x,this.index);}},ko.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},ko.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},ko.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},ko.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},ko.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ka),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;},ko.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());},ko.prototype.addFeature=function(t,e,r,n){for(var i=0,a=bo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray),c=p.vertexLength,h=[],f=[],y=0,d=o;y<d.length;y+=1){var m=d[y];if(0!==m.length){m!==o[0]&&f.push(h.length/2);var v=this.segments2.prepareSegment(m.length,this.layoutVertexArray,this.indexArray2),g=v.vertexLength;this.layoutVertexArray.emplaceBack(m[0].x,m[0].y),this.indexArray2.emplaceBack(g+m.length-1,g),h.push(m[0].x),h.push(m[0].y);for(var x=1;x<m.length;x++)this.layoutVertexArray.emplaceBack(m[x].x,m[x].y),this.indexArray2.emplaceBack(g+x-1,g+x),h.push(m[x].x),h.push(m[x].y);v.vertexLength+=m.length,v.primitiveLength+=m.length;}}for(var b=Xa(h,f),_=0;_<b.length;_+=3)this.indexArray.emplaceBack(c+b[_],c+b[_+1],c+b[_+2]);p.vertexLength+=s,p.primitiveLength+=b.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},gn("FillBucket",ko,{omit:["layers","patternFeatures"]});var So=new Hn({"fill-sort-key":new Xn(zt.layout_fill["fill-sort-key"])}),zo={paint:new Hn({"fill-antialias":new Kn(zt.paint_fill["fill-antialias"]),"fill-opacity":new Xn(zt.paint_fill["fill-opacity"]),"fill-color":new Xn(zt.paint_fill["fill-color"]),"fill-outline-color":new Xn(zt.paint_fill["fill-outline-color"]),"fill-translate":new Kn(zt.paint_fill["fill-translate"]),"fill-translate-anchor":new Kn(zt.paint_fill["fill-translate-anchor"]),"fill-pattern":new Zn(zt.paint_fill["fill-pattern"])}),layout:So},Io=function(t){function e(e){t.call(this,e,zo);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e);var r=this.paint._values["fill-outline-color"];"constant"===r.value.kind&&void 0===r.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);},e.prototype.createBucket=function(t){return new ko(t)},e.prototype.queryRadius=function(){return Aa(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o){return fa(ka(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,o),n)},e.prototype.isTileClipped=function(){return !0},e}(Yn),Co=ti([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,Bo=Eo;function Eo(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Po,this,e);}function Po(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function Mo(t){for(var e,r,n=0,i=0,a=t.length,o=a-1;i<a;o=i++)e=t[i],n+=((r=t[o]).x-e.x)*(e.y+r.y);return n}Eo.types=["Unknown","Point","LineString","Polygon"],Eo.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,a=0,o=0,s=0,u=[];t.pos<r;){if(a<=0){var l=t.readVarint();n=7&l,a=l>>3;}if(a--,1===n||2===n)o+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&u.push(e),e=[]),e.push(new i(o,s));else{if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&u.push(e),u},Eo.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,o=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var p=t.readVarint();r=7&p,n=p>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<o&&(o=i),i>s&&(s=i),(a+=t.readSVarint())<u&&(u=a),a>l&&(l=a);else if(7!==r)throw new Error("unknown command "+r)}return [o,u,s,l]},Eo.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),o=this.extent*t,s=this.extent*e,u=this.loadGeometry(),l=Eo.types[this.type];function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+s)/a;t[e]=[360*(r.x+o)/a-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90];}}switch(this.type){case 1:var c=[];for(n=0;n<u.length;n++)c[n]=u[n][0];p(u=c);break;case 2:for(n=0;n<u.length;n++)p(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var o=Mo(t[a]);0!==o&&(void 0===n&&(n=o<0),n===o<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}r&&i.push(r);return i}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)p(u[n][i]);}1===u.length?u=u[0]:l="Multi"+l;var h={type:"Feature",geometry:{type:l,coordinates:u},properties:this.properties};return "id"in this&&(h.id=this.id),h};var To=Vo;function Vo(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Fo,this,e),this.length=this._features.length;}function Fo(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function Oo(t,e,r){if(3===t){var n=new To(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}Vo.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new Bo(this._pbf,e,this.extent,this._keys,this._values)};var Lo={VectorTile:function(t,e){this.layers=t.readFields(Oo,{},e);},VectorTileFeature:Bo,VectorTileLayer:To},Do=Lo.VectorTileFeature.types,Uo=Math.pow(2,13);function Ro(t,e,r,n,i,a,o,s){t.emplaceBack(e,r,2*Math.floor(n*Uo)+o,i*Uo*2,a*Uo*2,Math.round(s));}var jo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new ii,this.indexArray=new gi,this.programConfigurations=new ra(Co,t.layers,t.zoom),this.segments=new Oi,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id});};function qo(t,e){return t.x===e.x&&(t.x<0||t.x>aa)||t.y===e.y&&(t.y<0||t.y>aa)}function No(t){return t.every(function(t){return t.x<0})||t.every(function(t){return t.x>aa})||t.every(function(t){return t.y<0})||t.every(function(t){return t.y>aa})}jo.prototype.populate=function(t,e){this.features=[],this.hasPattern=wo("fill-extrusion",this.layers,e);for(var r=0,n=t;r<n.length;r+=1){var i=n[r],a=i.feature,o=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Fn(this.zoom),a)){var u=ua(a),l={sourceLayerIndex:s,index:o,geometry:u,properties:a.properties,type:a.type,patterns:{}};void 0!==a.id&&(l.id=a.id),this.hasPattern?this.features.push(Ao("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,u,o,{}),e.featureIndex.insert(a,u,o,s,this.index,!0);}}},jo.prototype.addFeatures=function(t,e){for(var r=0,n=this.features;r<n.length;r+=1){var i=n[r],a=i.geometry;this.addFeature(i,a,i.index,e);}},jo.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},jo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},jo.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},jo.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Co),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},jo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},jo.prototype.addFeature=function(t,e,r,n){for(var i=0,a=bo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),c=0,h=o;c<h.length;c+=1){var f=h[c];if(0!==f.length&&!No(f))for(var y=0,d=0;d<f.length;d++){var m=f[d];if(d>=1){var v=f[d-1];if(!qo(m,v)){p.vertexLength+4>Oi.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));var g=m.sub(v)._perp()._unit(),x=v.dist(m);y+x>32768&&(y=0),Ro(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,0,y),Ro(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,1,y),y+=x,Ro(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,0,y),Ro(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,1,y);var b=p.vertexLength;this.indexArray.emplaceBack(b,b+2,b+1),this.indexArray.emplaceBack(b+1,b+2,b+3),p.vertexLength+=4,p.primitiveLength+=2;}}}}if(p.vertexLength+s>Oi.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray)),"Polygon"===Do[t.type]){for(var _=[],w=[],A=p.vertexLength,k=0,S=o;k<S.length;k+=1){var z=S[k];if(0!==z.length){z!==o[0]&&w.push(_.length/2);for(var I=0;I<z.length;I++){var C=z[I];Ro(this.layoutVertexArray,C.x,C.y,0,0,1,1,0),_.push(C.x),_.push(C.y);}}}for(var B=Xa(_,w),E=0;E<B.length;E+=3)this.indexArray.emplaceBack(A+B[E],A+B[E+2],A+B[E+1]);p.primitiveLength+=B.length/3,p.vertexLength+=s;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},gn("FillExtrusionBucket",jo,{omit:["layers","features"]});var Ko={paint:new Hn({"fill-extrusion-opacity":new Kn(zt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new Xn(zt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new Kn(zt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new Kn(zt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new Zn(zt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new Xn(zt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new Xn(zt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new Kn(zt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},Xo=function(t){function e(e){t.call(this,e,Ko);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new jo(t)},e.prototype.queryRadius=function(){return Aa(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return !0},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s,u){var l=ka(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),o.angle,s),p=this.paint.get("fill-extrusion-height").evaluate(e,r),c=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,n){for(var a=[],o=0,s=t;o<s.length;o+=1){var u=s[o],l=[u.x,u.y,n,1];Ea(l,l,e),a.push(new i(l[0]/l[3],l[1]/l[3]));}return a}(l,u,0,0),f=function(t,e,r,n){for(var a=[],o=[],s=n[8]*e,u=n[9]*e,l=n[10]*e,p=n[11]*e,c=n[8]*r,h=n[9]*r,f=n[10]*r,y=n[11]*r,d=0,m=t;d<m.length;d+=1){for(var v=m[d],g=[],x=[],b=0,_=v;b<_.length;b+=1){var w=_[b],A=w.x,k=w.y,S=n[0]*A+n[4]*k+n[12],z=n[1]*A+n[5]*k+n[13],I=n[2]*A+n[6]*k+n[14],C=n[3]*A+n[7]*k+n[15],B=I+l,E=C+p,P=S+c,M=z+h,T=I+f,V=C+y,F=new i((S+s)/E,(z+u)/E);F.z=B/E,g.push(F);var O=new i(P/V,M/V);O.z=T/V,x.push(O);}a.push(g),o.push(x);}return [a,o]}(n,c,p,u);return function(t,e,r){var n=1/0;fa(r,e)&&(n=Go(r,e[0]));for(var i=0;i<e.length;i++)for(var a=e[i],o=t[i],s=0;s<a.length-1;s++){var u=a[s],l=a[s+1],p=o[s],c=o[s+1],h=[u,l,c,p,u];ca(r,h)&&(n=Math.min(n,Go(r,h)));}return n!==1/0&&n}(f[0],f[1],h)},e}(Yn);function Zo(t,e){return t.x*e.x+t.y*e.y}function Go(t,e){if(1===t.length){var r=e[0],n=e[1],i=e[3],a=t[0],o=n.sub(r),s=i.sub(r),u=a.sub(r),l=Zo(o,o),p=Zo(o,s),c=Zo(s,s),h=Zo(u,o),f=Zo(u,s),y=l*c-p*p,d=(c*h-p*f)/y,m=(l*f-p*h)/y,v=1-d-m;return r.z*v+n.z*d+i.z*m}for(var g=1/0,x=0,b=e;x<b.length;x+=1){var _=b[x];g=Math.min(g,_.z);}return g}var Jo=ti([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,Ho=Lo.VectorTileFeature.types,Yo=Math.cos(Math.PI/180*37.5),$o=Math.pow(2,14)/.5,Wo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new ai,this.indexArray=new gi,this.programConfigurations=new ra(Jo,t.layers,t.zoom),this.segments=new Oi,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id});};Wo.prototype.populate=function(t,e){this.hasPattern=wo("line",this.layers,e);for(var r=this.layers[0].layout.get("line-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.index,l=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Fn(this.zoom),s)){var p=ua(s),c=r?r.evaluate(s,{}):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:l,index:u,geometry:p,patterns:{},sortKey:c};n.push(h);}}r&&n.sort(function(t,e){return t.sortKey-e.sortKey});for(var f=0,y=n;f<y.length;f+=1){var d=y[f],m=d,v=m.geometry,g=m.index,x=m.sourceLayerIndex;if(this.hasPattern){var b=Ao("line",this.layers,d,this.zoom,e);this.patternFeatures.push(b);}else this.addFeature(d,v,g,{});var _=t[g].feature;e.featureIndex.insert(_,v,g,x,this.index);}},Wo.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Wo.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},Wo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Wo.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Wo.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Jo),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Wo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Wo.prototype.addFeature=function(t,e,r,n){for(var i=this.layers[0].layout,a=i.get("line-join").evaluate(t,{}),o=i.get("line-cap"),s=i.get("line-miter-limit"),u=i.get("line-round-limit"),l=0,p=e;l<p.length;l+=1){var c=p[l];this.addLine(c,t,a,o,s,u,r,n);}},Wo.prototype.addLine=function(t,e,r,n,i,a,o,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end;for(var u=0;u<t.length-1;u++)this.totalDistance+=t[u].dist(t[u+1]);}for(var l="Polygon"===Ho[e.type],p=t.length;p>=2&&t[p-1].equals(t[p-2]);)p--;for(var c=0;c<p-1&&t[c].equals(t[c+1]);)c++;if(!(p<(l?3:2))){"bevel"===r&&(i=1.05);var h,f=aa/(512*this.overscaling)*15,y=this.segments.prepareSegment(10*p,this.layoutVertexArray,this.indexArray),d=void 0,m=void 0,v=void 0,g=void 0;this.e1=this.e2=-1,l&&(h=t[p-2],g=t[c].sub(h)._unit()._perp());for(var x=c;x<p;x++)if(!(m=l&&x===p-1?t[c+1]:t[x+1])||!t[x].equals(m)){g&&(v=g),h&&(d=h),h=t[x],g=m?m.sub(h)._unit()._perp():v;var b=(v=v||g).add(g);0===b.x&&0===b.y||b._unit();var _=v.x*g.x+v.y*g.y,w=b.x*g.x+b.y*g.y,A=0!==w?1/w:1/0,k=2*Math.sqrt(2-2*w),S=w<Yo&&d&&m,z=v.x*g.y-v.y*g.x>0;if(S&&x>c){var I=h.dist(d);if(I>2*f){var C=h.sub(h.sub(d)._mult(f/I)._round());this.updateDistance(d,C),this.addCurrentVertex(C,v,0,0,y),d=C;}}var B=d&&m,E=B?r:l?"butt":n;if(B&&"round"===E&&(A<a?E="miter":A<=2&&(E="fakeround")),"miter"===E&&A>i&&(E="bevel"),"bevel"===E&&(A>2&&(E="flipbevel"),A<i&&(E="miter")),d&&this.updateDistance(d,h),"miter"===E)b._mult(A),this.addCurrentVertex(h,b,0,0,y);else if("flipbevel"===E){if(A>100)b=g.mult(-1);else{var P=A*v.add(g).mag()/v.sub(g).mag();b._perp()._mult(P*(z?-1:1));}this.addCurrentVertex(h,b,0,0,y),this.addCurrentVertex(h,b.mult(-1),0,0,y);}else if("bevel"===E||"fakeround"===E){var M=-Math.sqrt(A*A-1),T=z?M:0,V=z?0:M;if(d&&this.addCurrentVertex(h,v,T,V,y),"fakeround"===E)for(var F=Math.round(180*k/Math.PI/20),O=1;O<F;O++){var L=O/F;if(.5!==L){var D=L-.5;L+=L*D*(L-1)*((1.0904+_*(_*(3.55645-1.43519*_)-3.2452))*D*D+(.848013+_*(.215638*_-1.06021)));}var U=g.sub(v)._mult(L)._add(v)._unit()._mult(z?-1:1);this.addHalfVertex(h,U.x,U.y,!1,z,0,y);}m&&this.addCurrentVertex(h,g,-T,-V,y);}else if("butt"===E)this.addCurrentVertex(h,b,0,0,y);else if("square"===E){var R=d?1:-1;this.addCurrentVertex(h,b,R,R,y);}else"round"===E&&(d&&(this.addCurrentVertex(h,v,0,0,y),this.addCurrentVertex(h,v,1,1,y,!0)),m&&(this.addCurrentVertex(h,g,-1,-1,y,!0),this.addCurrentVertex(h,g,0,0,y)));if(S&&x<p-1){var j=h.dist(m);if(j>2*f){var q=h.add(m.sub(h)._mult(f/j)._round());this.updateDistance(h,q),this.addCurrentVertex(q,g,0,0,y),h=q;}}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e,o,s);}},Wo.prototype.addCurrentVertex=function(t,e,r,n,i,a){void 0===a&&(a=!1);var o=e.x+e.y*r,s=e.y-e.x*r,u=-e.x+e.y*n,l=-e.y-e.x*n;this.addHalfVertex(t,o,s,a,!1,r,i),this.addHalfVertex(t,u,l,a,!0,-n,i),this.distance>$o/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,n,i,a));},Wo.prototype.addHalfVertex=function(t,e,r,n,i,a,o){var s=t.x,u=t.y,l=.5*this.scaledDistance;this.layoutVertexArray.emplaceBack((s<<1)+(n?1:0),(u<<1)+(i?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===a?0:a<0?-1:1)|(63&l)<<2,l>>6);var p=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,p),o.primitiveLength++),i?this.e2=p:this.e1=p;},Wo.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*($o-1):this.distance;},gn("LineBucket",Wo,{omit:["layers","patternFeatures"]});var Qo=new Hn({"line-cap":new Kn(zt.layout_line["line-cap"]),"line-join":new Xn(zt.layout_line["line-join"]),"line-miter-limit":new Kn(zt.layout_line["line-miter-limit"]),"line-round-limit":new Kn(zt.layout_line["line-round-limit"]),"line-sort-key":new Xn(zt.layout_line["line-sort-key"])}),ts={paint:new Hn({"line-opacity":new Xn(zt.paint_line["line-opacity"]),"line-color":new Xn(zt.paint_line["line-color"]),"line-translate":new Kn(zt.paint_line["line-translate"]),"line-translate-anchor":new Kn(zt.paint_line["line-translate-anchor"]),"line-width":new Xn(zt.paint_line["line-width"]),"line-gap-width":new Xn(zt.paint_line["line-gap-width"]),"line-offset":new Xn(zt.paint_line["line-offset"]),"line-blur":new Xn(zt.paint_line["line-blur"]),"line-dasharray":new Gn(zt.paint_line["line-dasharray"]),"line-pattern":new Zn(zt.paint_line["line-pattern"]),"line-gradient":new Jn(zt.paint_line["line-gradient"])}),layout:Qo},es=new(function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new Fn(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,n,i){return r=c({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,n,i)},e}(Xn))(ts.paint.properties["line-width"].specification);es.useIntegerZoom=!0;var rs=function(t){function e(e){t.call(this,e,ts);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient();},e.prototype._updateGradient=function(){var t=this._transitionablePaint._values["line-gradient"].value.expression;this.gradient=Ra(t,"lineProgress"),this.gradientTexture=null;},e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e),this.paint._values["line-floorwidth"]=es.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e);},e.prototype.createBucket=function(t){return new Wo(t)},e.prototype.queryRadius=function(t){var e=t,r=ns(wa("line-width",this,e),wa("line-gap-width",this,e)),n=wa("line-offset",this,e);return r/2+Math.abs(n)+Aa(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s){var u=ka(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),o.angle,s),l=s/2*ns(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),p=this.paint.get("line-offset").evaluate(e,r);return p&&(n=function(t,e){for(var r=[],n=new i(0,0),a=0;a<t.length;a++){for(var o=t[a],s=[],u=0;u<o.length;u++){var l=o[u-1],p=o[u],c=o[u+1],h=0===u?n:p.sub(l)._unit()._perp(),f=u===o.length-1?n:c.sub(p)._unit()._perp(),y=h._add(f)._unit(),d=y.x*f.x+y.y*f.y;y._mult(1/d),s.push(y._mult(e)._add(p));}r.push(s);}return r}(n,p*s)),function(t,e,r){for(var n=0;n<e.length;n++){var i=e[n];if(t.length>=3)for(var a=0;a<i.length;a++)if(ba(t,i[a]))return !0;if(ya(t,i,r))return !0}return !1}(u,n,l)},e.prototype.isTileClipped=function(){return !0},e}(Yn);function ns(t,e){return e>0?e+2*t:t}var is=ti([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}]),as=ti([{name:"a_projected_pos",components:3,type:"Float32"}],4),os=(ti([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),ti([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),ss=(ti([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),ti([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),us=ti([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4);ti([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"}]),ti([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",name:"radialTextOffset"}]),ti([{type:"Float32",name:"offsetX"}]),ti([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);function ls(t,e,r){return t.sections.forEach(function(t){t.text=function(t,e,r){var n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),Vn.applyArabicShaping&&(t=Vn.applyArabicShaping(t)),t}(t.text,e,r);}),t}var ps={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var cs=24,hs={horizontal:1,vertical:2,horizontalOnly:3},fs=function(){this.text="",this.sectionIndex=[],this.sections=[];};function ys(t,e,r,n,i,a,o,s,u,l,p){var c,h=fs.fromFeature(t,r);l===hs.vertical&&h.verticalizePunctuation();var f=Vn.processBidirectionalText,y=Vn.processStyledBidirectionalText;if(f&&1===h.sections.length){c=[];for(var d=0,m=f(h.toString(),bs(h,s,n,e));d<m.length;d+=1){var v=m[d],g=new fs;g.text=v,g.sections=h.sections;for(var x=0;x<v.length;x++)g.sectionIndex.push(0);c.push(g);}}else if(y){c=[];for(var b=0,_=y(h.text,h.sectionIndex,bs(h,s,n,e));b<_.length;b+=1){var w=_[b],A=new fs;A.text=w[0],A.sectionIndex=w[1],A.sections=h.sections,c.push(A);}}else c=function(t,e){for(var r=[],n=t.text,i=0,a=0,o=e;a<o.length;a+=1){var s=o[a];r.push(t.substring(i,s)),i=s;}return i<n.length&&r.push(t.substring(i,n.length)),r}(h,bs(h,s,n,e));var k=[],S={positionedGlyphs:k,text:h.toString(),top:u[1],bottom:u[1],left:u[0],right:u[0],writingMode:l,lineCount:c.length,yOffset:-17};return function(t,e,r,n,i,a,o,s,u){for(var l=0,p=t.yOffset,c=0,h=t.positionedGlyphs,f="right"===a?1:"left"===a?0:.5,y=0,d=r;y<d.length;y+=1){var m=d[y];m.trim();var v=m.getMaxScale();if(m.length()){for(var g=h.length,x=0;x<m.length();x++){var b=m.getSection(x),_=m.getSectionIndex(x),w=m.getCharCode(x),A=24*(v-b.scale),k=e[b.fontStack],S=k&&k[w];S&&(o===hs.horizontal||!u&&!zn(w)||u&&(ds[w]||(I=w,An.Arabic(I)||An["Arabic Supplement"](I)||An["Arabic Extended-A"](I)||An["Arabic Presentation Forms-A"](I)||An["Arabic Presentation Forms-B"](I)))?(h.push({glyph:w,x:l,y:p+A,vertical:!1,scale:b.scale,fontStack:b.fontStack,sectionIndex:_}),l+=S.metrics.advance*b.scale+s):(h.push({glyph:w,x:l,y:p+A,vertical:!0,scale:b.scale,fontStack:b.fontStack,sectionIndex:_}),l+=cs*b.scale+s));}if(h.length!==g){var z=l-s;c=Math.max(z,c),ws(h,e,g,h.length-1,f);}l=0,p+=n*v;}else p+=n;}var I;var C=_s(i),B=C.horizontalAlign,E=C.verticalAlign;!function(t,e,r,n,i,a,o){for(var s=(e-r)*i,u=(-n*o+.5)*a,l=0;l<t.length;l++)t[l].x+=s,t[l].y+=u;}(h,f,B,E,c,n,r.length);var P=p-t.yOffset;t.top+=-E*P,t.bottom=t.top+P,t.left+=-B*c,t.right=t.left+c;}(S,e,c,i,a,o,l,s,p),!!k.length&&S}fs.fromFeature=function(t,e){for(var r=new fs,n=0;n<t.sections.length;n++){var i=t.sections[n];r.sections.push({scale:i.scale||1,fontStack:i.fontStack||e}),r.text+=i.text;for(var a=0;a<i.text.length;a++)r.sectionIndex.push(n);}return r},fs.prototype.length=function(){return this.text.length},fs.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},fs.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},fs.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},fs.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;(!n||!In(n)||ps[t[r+1]])&&(!i||!In(i)||ps[t[r-1]])&&ps[t[r]]?e+=ps[t[r]]:e+=t[r];}return e}(this.text);},fs.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&ds[this.text.charCodeAt(e)];e++)t++;for(var r=this.text.length,n=this.text.length-1;n>=0&&n>=t&&ds[this.text.charCodeAt(n)];n--)r--;this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r);},fs.prototype.substring=function(t,e){var r=new fs;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},fs.prototype.toString=function(){return this.text},fs.prototype.getMaxScale=function(){var t=this;return this.sectionIndex.reduce(function(e,r){return Math.max(e,t.sections[r].scale)},0)};var ds={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},ms={};function vs(t,e,r,n){var i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function gs(t,e,r){var n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function xs(t,e,r,n,i,a){for(var o=null,s=vs(e,r,i,a),u=0,l=n;u<l.length;u+=1){var p=l[u],c=vs(e-p.x,r,i,a)+p.badness;c<=s&&(o=p,s=c);}return {index:t,x:e,priorBreak:o,badness:s}}function bs(t,e,r,n){if(!r)return [];if(!t)return [];for(var i,a=[],o=function(t,e,r,n){for(var i=0,a=0;a<t.length();a++){var o=t.getSection(a),s=n[o.fontStack],u=s&&s[t.getCharCode(a)];u&&(i+=u.metrics.advance*o.scale+e);}return i/Math.max(1,Math.ceil(i/r))}(t,e,r,n),s=t.text.indexOf("​")>=0,u=0,l=0;l<t.length();l++){var p=t.getSection(l),c=t.getCharCode(l),h=n[p.fontStack],f=h&&h[c];if(f&&!ds[c]&&(u+=f.metrics.advance*p.scale+e),l<t.length()-1){var y=!!(!((i=c)<11904)&&(An["Bopomofo Extended"](i)||An.Bopomofo(i)||An["CJK Compatibility Forms"](i)||An["CJK Compatibility Ideographs"](i)||An["CJK Compatibility"](i)||An["CJK Radicals Supplement"](i)||An["CJK Strokes"](i)||An["CJK Symbols and Punctuation"](i)||An["CJK Unified Ideographs Extension A"](i)||An["CJK Unified Ideographs"](i)||An["Enclosed CJK Letters and Months"](i)||An["Halfwidth and Fullwidth Forms"](i)||An.Hiragana(i)||An["Ideographic Description Characters"](i)||An["Kangxi Radicals"](i)||An["Katakana Phonetic Extensions"](i)||An.Katakana(i)||An["Vertical Forms"](i)||An["Yi Radicals"](i)||An["Yi Syllables"](i)));(ms[c]||y)&&a.push(xs(l+1,u,o,a,gs(c,t.getCharCode(l+1),y&&s),!1));}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(xs(t.length(),u,o,a,0,!0))}function _s(t){var e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function ws(t,e,r,n,i){if(i){var a=t[n],o=e[a.fontStack],s=o&&o[a.glyph];if(s)for(var u=s.metrics.advance*a.scale,l=(t[n].x+u)*i,p=r;p<=n;p++)t[p].x-=l;}}ms[10]=!0,ms[32]=!0,ms[38]=!0,ms[40]=!0,ms[41]=!0,ms[43]=!0,ms[45]=!0,ms[47]=!0,ms[173]=!0,ms[183]=!0,ms[8203]=!0,ms[8208]=!0,ms[8211]=!0,ms[8231]=!0;var As=function(t){function e(e,r,n,i){t.call(this,e,r),this.angle=n,void 0!==i&&(this.segment=i);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(i);gn("Anchor",As);var ks=256;function Ss(t,e){var r=e.expression;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new Fn(t+1))};if("source"===r.kind)return {kind:"source"};for(var n=r.zoomStops,i=r.interpolationType,a=0;a<n.length&&n[a]<=t;)a++;for(var o=a=Math.max(0,a-1);o<n.length&&n[o]<t+1;)o++;o=Math.min(n.length-1,o);var s=n[a],u=n[o];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:u,interpolationType:i}:{kind:"camera",minZoom:s,maxZoom:u,minSize:r.evaluate(new Fn(s)),maxSize:r.evaluate(new Fn(u)),interpolationType:i}}function zs(t,e,r){var n=e.uSize,i=e.uSizeT,a=r.lowerSize,o=r.upperSize;return "source"===t.kind?a/ks:"composite"===t.kind?we(a/ks,o/ks,i):n}function Is(t,e){var r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){var i=t.interpolationType,a=t.minZoom,o=t.maxZoom,s=i?l(Ne.interpolationFactor(i,e,a,o),0,1):0;"camera"===t.kind?n=we(t.minSize,t.maxSize,s):r=s;}return {uSizeT:r,uSize:n}}var Cs=Object.freeze({getSizeData:Ss,evaluateSizeForFeature:zs,evaluateSizeForZoom:Is,SIZE_PACK_FACTOR:ks}),Bs=Lo.VectorTileFeature.types,Es=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function Ps(t,e,r,n,i,a,o,s){t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,o,s?s[0]:0,s?s[1]:0);}function Ms(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}var Ts=function(t){this.layoutVertexArray=new si,this.indexArray=new gi,this.programConfigurations=t,this.segments=new Oi,this.dynamicLayoutVertexArray=new ui,this.opacityVertexArray=new li,this.placedSymbolArray=new zi;};Ts.prototype.upload=function(t,e,r,n){r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,is.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,as.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,Es,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t);},Ts.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());},gn("SymbolBuffers",Ts);var Vs=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new Oi,this.collisionVertexArray=new hi;};Vs.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,os.members,!0);},Vs.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());},gn("CollisionBuffers",Vs);var Fs=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasPaintOverrides=!1;var e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=Ss(this.zoom,e["text-size"]),this.iconSizeData=Ss(this.zoom,e["icon-size"]);var r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1);var a="viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey;this.sortFeaturesByY=a&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map(function(t){return hs[t]})),this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id}),this.sourceID=t.sourceID;};Fs.prototype.createArrays=function(){var t=this.layers[0].layout;this.hasPaintOverrides=Us.hasPaintOverrides(t),this.text=new Ts(new ra(is.members,this.layers,this.zoom,function(t){return /^text/.test(t)})),this.icon=new Ts(new ra(is.members,this.layers,this.zoom,function(t){return /^icon/.test(t)})),this.collisionBox=new Vs(ci,ss.members,xi),this.collisionCircle=new Vs(ci,us.members,gi),this.glyphOffsetArray=new Ei,this.lineVertexArray=new Mi,this.symbolInstances=new Ci;},Fs.prototype.calculateGlyphDependencies=function(t,e,r,n,i){for(var a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){var o=ps[t.charAt(a)];o&&(e[o.charCodeAt(0)]=!0);}},Fs.prototype.populate=function(t,e){var r=this.layers[0],n=r.layout,i=n.get("text-font"),a=n.get("text-field"),o=n.get("icon-image"),s=("constant"!==a.value.kind||a.value.value.toString().length>0)&&("constant"!==i.value.kind||i.value.value.length>0),u="constant"!==o.value.kind||o.value.value&&o.value.value.length>0,l=n.get("symbol-sort-key");if(this.features=[],s||u){for(var p=e.iconDependencies,c=e.glyphDependencies,h=new Fn(this.zoom),f=0,y=t;f<y.length;f+=1){var d=y[f],m=d.feature,v=d.index,g=d.sourceLayerIndex;if(r._featureFilter(h,m)){var x=void 0;if(s){var b=r.getValueAndResolveTokens("text-field",m);x=ls(b instanceof Wt?b:Wt.fromString(b),r,m);}var _=void 0;if(u&&(_=r.getValueAndResolveTokens("icon-image",m)),x||_){var w=this.sortFeaturesByKey?l.evaluate(m,{}):void 0,A={text:x,icon:_,index:v,sourceLayerIndex:g,geometry:ua(m),properties:m.properties,type:Bs[m.type],sortKey:w};if(void 0!==m.id&&(A.id=m.id),this.features.push(A),_&&(p[_]=!0),x){var k=i.evaluate(m,{}).join(","),S="map"===n.get("text-rotation-alignment")&&"point"!==n.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(hs.vertical)>=0;for(var z=0,I=x.sections;z<I.length;z+=1){var C=I[z],B=kn(x.toString()),E=C.fontStack||k,P=c[E]=c[E]||{};this.calculateGlyphDependencies(C.text,P,S,this.allowVerticalPlacement,B);}}}}}"line"===n.get("symbol-placement")&&(this.features=function(t){var e={},r={},n=[],i=0;function a(e){n.push(t[e]),i++;}function o(t,e,i){var a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function s(t,r,i){var a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function u(t,e,r){var n=r?e[0][e[0].length-1]:e[0][0];return t+":"+n.x+":"+n.y}for(var l=0;l<t.length;l++){var p=t[l],c=p.geometry,h=p.text?p.text.toString():null;if(h){var f=u(h,c),y=u(h,c,!0);if(f in r&&y in e&&r[f]!==e[y]){var d=s(f,y,c),m=o(f,y,n[d].geometry);delete e[f],delete r[y],r[u(h,n[m].geometry,!0)]=m,n[d].geometry=null;}else f in r?o(f,y,c):y in e?s(f,y,c):(a(l),e[f]=i-1,r[y]=i-1);}else a(l);}return n.filter(function(t){return t.geometry})}(this.features)),this.sortFeaturesByKey&&this.features.sort(function(t,e){return t.sortKey-e.sortKey});}},Fs.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));},Fs.prototype.isEmpty=function(){return 0===this.symbolInstances.length},Fs.prototype.uploadPending=function(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},Fs.prototype.upload=function(t){this.uploaded||(this.collisionBox.upload(t),this.collisionCircle.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;},Fs.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.collisionBox.destroy(),this.collisionCircle.destroy();},Fs.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length;if(void 0!==t.segment){for(var n=t.dist(e[t.segment+1]),i=t.dist(e[t.segment]),a={},o=t.segment+1;o<e.length;o++)a[o]={x:e[o].x,y:e[o].y,tileUnitDistanceFromAnchor:n},o<e.length-1&&(n+=e[o+1].dist(e[o]));for(var s=t.segment||0;s>=0;s--)a[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s>0&&(i+=e[s-1].dist(e[s]));for(var u=0;u<e.length;u++){var l=a[u];this.lineVertexArray.emplaceBack(l.x,l.y,l.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},Fs.prototype.addSymbols=function(t,e,r,n,i,a,o,s,u,l){var p=this,c=t.indexArray,h=t.layoutVertexArray,f=t.dynamicLayoutVertexArray,y=t.segments.prepareSegment(4*e.length,t.layoutVertexArray,t.indexArray,a.sortKey),d=this.glyphOffsetArray.length,m=y.vertexLength,v=this.allowVerticalPlacement&&o===hs.vertical?Math.PI/2:0,g=function(t){var e=t.tl,n=t.tr,i=t.bl,a=t.br,o=t.tex,u=y.vertexLength,l=t.glyphOffset[1];Ps(h,s.x,s.y,e.x,l+e.y,o.x,o.y,r),Ps(h,s.x,s.y,n.x,l+n.y,o.x+o.w,o.y,r),Ps(h,s.x,s.y,i.x,l+i.y,o.x,o.y+o.h,r),Ps(h,s.x,s.y,a.x,l+a.y,o.x+o.w,o.y+o.h,r),Ms(f,s,v),c.emplaceBack(u,u+1,u+2),c.emplaceBack(u+1,u+2,u+3),y.vertexLength+=4,y.primitiveLength+=2,p.glyphOffsetArray.emplaceBack(t.glyphOffset[0]);};if(a.text&&a.text.sections){var x=a.text.sections;if(this.hasPaintOverrides){for(var b,_=function(e,r){void 0===b||b===e&&!r||t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},x[b]),b=e;},w=0,A=e;w<A.length;w+=1){var k=A[w];_(k.sectionIndex,!1),g(k);}_(b,!0);}else{for(var S=0,z=e;S<z.length;S+=1){g(z[S]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},x[0]);}}else{for(var I=0,C=e;I<C.length;I+=1){g(C[I]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{});}t.placedSymbolArray.emplaceBack(s.x,s.y,d,this.glyphOffsetArray.length-d,m,u,l,s.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],o,0,!1,0);},Fs.prototype._addCollisionDebugVertex=function(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))},Fs.prototype.addCollisionDebugVertices=function(t,e,r,n,a,o,s,u){var l=a.segments.prepareSegment(4,a.layoutVertexArray,a.indexArray),p=l.vertexLength,c=a.layoutVertexArray,h=a.collisionVertexArray,f=s.anchorX,y=s.anchorY;if(this._addCollisionDebugVertex(c,h,o,f,y,new i(t,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,n)),this._addCollisionDebugVertex(c,h,o,f,y,new i(t,n)),l.vertexLength+=4,u){var d=a.indexArray;d.emplaceBack(p,p+1,p+2),d.emplaceBack(p,p+2,p+3),l.primitiveLength+=2;}else{var m=a.indexArray;m.emplaceBack(p,p+1),m.emplaceBack(p+1,p+2),m.emplaceBack(p+2,p+3),m.emplaceBack(p+3,p),l.primitiveLength+=4;}},Fs.prototype.addDebugCollisionBoxes=function(t,e,r){for(var n=t;n<e;n++){var i=this.collisionBoxArray.get(n),a=i.x1,o=i.y1,s=i.x2,u=i.y2,l=i.radius>0;this.addCollisionDebugVertices(a,o,s,u,l?this.collisionCircle:this.collisionBox,i.anchorPoint,r,l);}},Fs.prototype.generateCollisionDebugBuffers=function(){for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e);}},Fs.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,n,i,a,o){for(var s={},u=e;u<r;u++){var l=t.get(u);if(0===l.radius){s.textBox={x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,anchorPointX:l.anchorPointX,anchorPointY:l.anchorPointY},s.textFeatureIndex=l.featureIndex;break}s.textCircles||(s.textCircles=[],s.textFeatureIndex=l.featureIndex);s.textCircles.push(l.anchorPointX,l.anchorPointY,l.radius,l.signedDistanceFromAnchor,1);}for(var p=n;p<i;p++){var c=t.get(p);if(0===c.radius){s.verticalTextBox={x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,anchorPointX:c.anchorPointX,anchorPointY:c.anchorPointY},s.verticalTextFeatureIndex=c.featureIndex;break}}for(var h=a;h<o;h++){var f=t.get(h);if(0===f.radius){s.iconBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},s.iconFeatureIndex=f.featureIndex;break}}return s},Fs.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[];for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex));}},Fs.prototype.hasTextData=function(){return this.text.segments.get().length>0},Fs.prototype.hasIconData=function(){return this.icon.segments.get().length>0},Fs.prototype.hasCollisionBoxData=function(){return this.collisionBox.segments.get().length>0},Fs.prototype.hasCollisionCircleData=function(){return this.collisionCircle.segments.get().length>0},Fs.prototype.addIndicesForPlacedTextSymbol=function(t){for(var e=this.text.placedSymbolArray.get(t),r=e.vertexStartIndex+4*e.numGlyphs,n=e.vertexStartIndex;n<r;n+=4)this.text.indexArray.emplaceBack(n,n+1,n+2),this.text.indexArray.emplaceBack(n+1,n+2,n+3);},Fs.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;for(var e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[],o=0;o<this.symbolInstances.length;++o){a.push(o);var s=this.symbolInstances.get(o);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort(function(t,e){return n[t]-n[e]||i[e]-i[t]}),a},Fs.prototype.sortFeatures=function(t){var e=this;if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(var r=0,n=this.symbolInstanceIndexes;r<n.length;r+=1){var i=n[r],a=this.symbolInstances.get(i);this.featureSortOrder.push(a.featureIndex),[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach(function(t,r,n){t>=0&&n.indexOf(t)===r&&e.addIndicesForPlacedTextSymbol(t);}),a.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedTextSymbol(a.verticalPlacedTextSymbolIndex);var o=this.icon.placedSymbolArray.get(i);if(o.numGlyphs){var s=o.vertexStartIndex;this.icon.indexArray.emplaceBack(s,s+1,s+2),this.icon.indexArray.emplaceBack(s+1,s+2,s+3);}}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}},gn("SymbolBucket",Fs,{omit:["layers","collisionBoxArray","features","compareText"]}),Fs.MAX_GLYPHS=65535,Fs.addDynamicAttributes=Ms;var Os=new Hn({"symbol-placement":new Kn(zt.layout_symbol["symbol-placement"]),"symbol-spacing":new Kn(zt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new Kn(zt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new Xn(zt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new Kn(zt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new Kn(zt.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new Kn(zt.layout_symbol["icon-ignore-placement"]),"icon-optional":new Kn(zt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new Kn(zt.layout_symbol["icon-rotation-alignment"]),"icon-size":new Xn(zt.layout_symbol["icon-size"]),"icon-text-fit":new Kn(zt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new Kn(zt.layout_symbol["icon-text-fit-padding"]),"icon-image":new Xn(zt.layout_symbol["icon-image"]),"icon-rotate":new Xn(zt.layout_symbol["icon-rotate"]),"icon-padding":new Kn(zt.layout_symbol["icon-padding"]),"icon-keep-upright":new Kn(zt.layout_symbol["icon-keep-upright"]),"icon-offset":new Xn(zt.layout_symbol["icon-offset"]),"icon-anchor":new Xn(zt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new Kn(zt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new Kn(zt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new Kn(zt.layout_symbol["text-rotation-alignment"]),"text-field":new Xn(zt.layout_symbol["text-field"]),"text-font":new Xn(zt.layout_symbol["text-font"]),"text-size":new Xn(zt.layout_symbol["text-size"]),"text-max-width":new Xn(zt.layout_symbol["text-max-width"]),"text-line-height":new Kn(zt.layout_symbol["text-line-height"]),"text-letter-spacing":new Xn(zt.layout_symbol["text-letter-spacing"]),"text-justify":new Xn(zt.layout_symbol["text-justify"]),"text-radial-offset":new Xn(zt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new Kn(zt.layout_symbol["text-variable-anchor"]),"text-anchor":new Xn(zt.layout_symbol["text-anchor"]),"text-max-angle":new Kn(zt.layout_symbol["text-max-angle"]),"text-writing-mode":new Kn(zt.layout_symbol["text-writing-mode"]),"text-rotate":new Xn(zt.layout_symbol["text-rotate"]),"text-padding":new Kn(zt.layout_symbol["text-padding"]),"text-keep-upright":new Kn(zt.layout_symbol["text-keep-upright"]),"text-transform":new Xn(zt.layout_symbol["text-transform"]),"text-offset":new Xn(zt.layout_symbol["text-offset"]),"text-allow-overlap":new Kn(zt.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new Kn(zt.layout_symbol["text-ignore-placement"]),"text-optional":new Kn(zt.layout_symbol["text-optional"])}),Ls={paint:new Hn({"icon-opacity":new Xn(zt.paint_symbol["icon-opacity"]),"icon-color":new Xn(zt.paint_symbol["icon-color"]),"icon-halo-color":new Xn(zt.paint_symbol["icon-halo-color"]),"icon-halo-width":new Xn(zt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new Xn(zt.paint_symbol["icon-halo-blur"]),"icon-translate":new Kn(zt.paint_symbol["icon-translate"]),"icon-translate-anchor":new Kn(zt.paint_symbol["icon-translate-anchor"]),"text-opacity":new Xn(zt.paint_symbol["text-opacity"]),"text-color":new Xn(zt.paint_symbol["text-color"],{runtimeType:Ut,getOverride:function(t){return t.textColor},hasOverride:function(t){return !!t.textColor}}),"text-halo-color":new Xn(zt.paint_symbol["text-halo-color"]),"text-halo-width":new Xn(zt.paint_symbol["text-halo-width"]),"text-halo-blur":new Xn(zt.paint_symbol["text-halo-blur"]),"text-translate":new Kn(zt.paint_symbol["text-translate"]),"text-translate-anchor":new Kn(zt.paint_symbol["text-translate-anchor"])}),layout:Os},Ds=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Ft,this.defaultValue=t;};Ds.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},Ds.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);},Ds.prototype.possibleOutputs=function(){return [void 0]},Ds.prototype.serialize=function(){return null},gn("FormatSectionOverride",Ds,{omit:["defaultValue"]});var Us=function(t){function e(e){t.call(this,e,Ls);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e){if(t.prototype.recalculate.call(this,e),"auto"===this.layout.get("icon-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var r=this.layout.get("text-writing-mode");if(r){for(var n=[],i=0,a=r;i<a.length;i+=1){var o=a[i];n.indexOf(o)<0&&n.push(o);}this.layout._values["text-writing-mode"]=n;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();},e.prototype.getValueAndResolveTokens=function(t,e){var r=this.layout.get(t).evaluate(e,{}),n=this._unevaluatedLayout._values[t];return n.isDataDriven()||zr(n.value)?r:function(t,e){return e.replace(/{([^{}]+)}/g,function(e,r){return r in t?String(t[r]):""})}(e.properties,r)},e.prototype.createBucket=function(t){return new Fs(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype._setPaintOverrides=function(){for(var t=0,r=Ls.paint.overridableProperties;t<r.length;t+=1){var n=r[t];if(e.hasPaintOverride(this.layout,n)){var i=this.paint.get(n),a=new Ds(i),o=new Sr(a,i.property.specification),s=null;s="constant"===i.value.kind||"source"===i.value.kind?new Cr("source",o):new Br("composite",o,i.value.zoomStops,i.value._interpolationType),this.paint._values[n]=new qn(i.property,s,i.parameters);}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,n){return !(!this.layout||r.isDataDriven()||n.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),n=Ls.paint.properties[e],i=!1,a=function(t){for(var e=0,r=t;e<r.length;e+=1){var a=r[e];if(n.overrides&&n.overrides.hasOverride(a))return void(i=!0)}};if("constant"===r.value.kind&&r.value.value instanceof Wt)a(r.value.value.sections);else if("source"===r.value.kind){var o=function(t){if(!i)if(t instanceof re&&te(t.value)===Nt){var e=t.value;a(e.sections);}else t instanceof oe?a(t.sections):t.eachChild(o);},s=r.value;s._styleExpression&&o(s._styleExpression.expression);}return i},e.hasPaintOverrides=function(t){for(var r=0,n=Ls.paint.overridableProperties;r<n.length;r+=1){var i=n[r];if(e.hasPaintOverride(t,i))return !0}return !1},e}(Yn),Rs={paint:new Hn({"background-color":new Kn(zt.paint_background["background-color"]),"background-pattern":new Gn(zt.paint_background["background-pattern"]),"background-opacity":new Kn(zt.paint_background["background-opacity"])})},js=function(t){function e(e){t.call(this,e,Rs);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Yn),qs={paint:new Hn({"raster-opacity":new Kn(zt.paint_raster["raster-opacity"]),"raster-hue-rotate":new Kn(zt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new Kn(zt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new Kn(zt.paint_raster["raster-brightness-max"]),"raster-saturation":new Kn(zt.paint_raster["raster-saturation"]),"raster-contrast":new Kn(zt.paint_raster["raster-contrast"]),"raster-resampling":new Kn(zt.paint_raster["raster-resampling"]),"raster-fade-duration":new Kn(zt.paint_raster["raster-fade-duration"])})},Ns=function(t){function e(e){t.call(this,e,qs);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Yn);var Ks=function(t){function e(e){t.call(this,e,{}),this.implementation=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.is3D=function(){return "3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},e}(Yn),Xs={circle:Pa,heatmap:ja,hillshade:Na,fill:Io,"fill-extrusion":Xo,line:rs,symbol:Us,background:js,raster:Ns};function Zs(t){for(var e=0,r=0,n=0,i=t;n<i.length;n+=1){var a=i[n];e+=a.w*a.h,r=Math.max(r,a.w);}t.sort(function(t,e){return e.h-t.h});for(var o=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,u=0,l=0,p=t;l<p.length;l+=1)for(var c=p[l],h=o.length-1;h>=0;h--){var f=o[h];if(!(c.w>f.w||c.h>f.h)){if(c.x=f.x,c.y=f.y,u=Math.max(u,c.y+c.h),s=Math.max(s,c.x+c.w),c.w===f.w&&c.h===f.h){var y=o.pop();h<o.length&&(o[h]=y);}else c.h===f.h?(f.x+=c.w,f.w-=c.w):c.w===f.w?(f.y+=c.h,f.h-=c.h):(o.push({x:f.x+c.w,y:f.y,w:f.w-c.w,h:c.h}),f.y+=c.h,f.h-=c.h);break}}return {w:s,h:u,fill:e/(s*u)||0}}var Gs=function(t,e){var r=e.pixelRatio,n=e.version;this.paddedRect=t,this.pixelRatio=r,this.version=n;},Js={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}};Js.tl.get=function(){return [this.paddedRect.x+1,this.paddedRect.y+1]},Js.br.get=function(){return [this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]},Js.tlbr.get=function(){return this.tl.concat(this.br)},Js.displaySize.get=function(){return [(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]},Object.defineProperties(Gs.prototype,Js);var Hs=function(t,e){var r={},n={};this.haveRenderCallbacks=[];var i=[];this.addImages(t,r,i),this.addImages(e,n,i);var a=Zs(i),o=a.w,s=a.h,u=new Da({width:o||1,height:s||1});for(var l in t){var p=t[l],c=r[l].paddedRect;Da.copy(p.data,u,{x:0,y:0},{x:c.x+1,y:c.y+1},p.data);}for(var h in e){var f=e[h],y=n[h].paddedRect,d=y.x+1,m=y.y+1,v=f.data.width,g=f.data.height;Da.copy(f.data,u,{x:0,y:0},{x:d,y:m},f.data),Da.copy(f.data,u,{x:0,y:g-1},{x:d,y:m-1},{width:v,height:1}),Da.copy(f.data,u,{x:0,y:0},{x:d,y:m+g},{width:v,height:1}),Da.copy(f.data,u,{x:v-1,y:0},{x:d-1,y:m},{width:1,height:g}),Da.copy(f.data,u,{x:0,y:0},{x:d+v,y:m},{width:1,height:g});}this.image=u,this.iconPositions=r,this.patternPositions=n;};Hs.prototype.addImages=function(t,e,r){for(var n in t){var i=t[n],a={x:0,y:0,w:i.data.width+2,h:i.data.height+2};r.push(a),e[n]=new Gs(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}},Hs.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);},Hs.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version;var n=t.tl,i=n[0],a=n[1];r.update(e.data,void 0,{x:i,y:a});}},gn("ImagePosition",Gs),gn("ImageAtlas",Hs);var Ys=self.HTMLImageElement,$s=self.HTMLCanvasElement,Ws=self.HTMLVideoElement,Qs=self.ImageData,tu=function(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);};tu.prototype.update=function(t,e,r){var n=t.width,i=t.height,a=!(this.size&&this.size[0]===n&&this.size[1]===i||r),o=this.context,s=o.gl;if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),o.pixelStoreUnpackFlipY.set(!1),o.pixelStoreUnpack.set(1),o.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),a)this.size=[n,i],t instanceof Ys||t instanceof $s||t instanceof Ws||t instanceof Qs?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,n,i,0,this.format,s.UNSIGNED_BYTE,t.data);else{var u=r||{x:0,y:0},l=u.x,p=u.y;t instanceof Ys||t instanceof $s||t instanceof Ws||t instanceof Qs?s.texSubImage2D(s.TEXTURE_2D,0,l,p,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,l,p,n,i,s.RGBA,s.UNSIGNED_BYTE,t.data);}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D);},tu.prototype.bind=function(t,e,r){var n=this.context.gl;n.bindTexture(n.TEXTURE_2D,this.texture),r!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);},tu.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},tu.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null;};var eu=function(t,e,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,l=u>>1,p=-7,c=r?i-1:0,h=r?-1:1,f=t[e+c];for(c+=h,a=f&(1<<-p)-1,f>>=-p,p+=s;p>0;a=256*a+t[e+c],c+=h,p-=8);for(o=a&(1<<-p)-1,a>>=-p,p+=n;p>0;o=256*o+t[e+c],c+=h,p-=8);if(0===a)a=1-l;else{if(a===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),a-=l;}return (f?-1:1)*o*Math.pow(2,a-n)},ru=function(t,e,r,n,i,a){var o,s,u,l=8*a-i-1,p=(1<<l)-1,c=p>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+c>=1?h/u:h*Math.pow(2,1-c))*u>=2&&(o++,u/=2),o+c>=p?(s=0,o=p):o+c>=1?(s=(e*u-1)*Math.pow(2,i),o+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+f]=255&s,f+=y,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;t[r+f]=255&o,f+=y,o/=256,l-=8);t[r+f-y]|=128*d;},nu=iu;function iu(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}iu.Varint=0,iu.Fixed64=1,iu.Bytes=2,iu.Fixed32=5;function au(t){return t.type===iu.Bytes?t.readVarint()+t.pos:t.pos+1}function ou(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function su(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function uu(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function lu(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function pu(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function cu(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function hu(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function fu(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function yu(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function du(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function mu(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function vu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function gu(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function xu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}iu.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=vu(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=xu(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=vu(this.buf,this.pos)+4294967296*vu(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=vu(this.buf,this.pos)+4294967296*xu(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=eu(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=eu(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(i=a[r.pos++],n=(112&i)>>4,i<128)return ou(t,n,e);if(i=a[r.pos++],n|=(127&i)<<3,i<128)return ou(t,n,e);if(i=a[r.pos++],n|=(127&i)<<10,i<128)return ou(t,n,e);if(i=a[r.pos++],n|=(127&i)<<17,i<128)return ou(t,n,e);if(i=a[r.pos++],n|=(127&i)<<24,i<128)return ou(t,n,e);if(i=a[r.pos++],n|=(1&i)<<31,i<128)return ou(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=function(t,e,r){var n="",i=e;for(;i<r;){var a,o,s,u=t[i],l=null,p=u>239?4:u>223?3:u>191?2:1;if(i+p>r)break;1===p?u<128&&(l=u):2===p?128==(192&(a=t[i+1]))&&(l=(31&u)<<6|63&a)<=127&&(l=null):3===p?(a=t[i+1],o=t[i+2],128==(192&a)&&128==(192&o)&&((l=(15&u)<<12|(63&a)<<6|63&o)<=2047||l>=55296&&l<=57343)&&(l=null)):4===p&&(a=t[i+1],o=t[i+2],s=t[i+3],128==(192&a)&&128==(192&o)&&128==(192&s)&&((l=(15&u)<<18|(63&a)<<12|(63&o)<<6|63&s)<=65535||l>=1114112)&&(l=null)),null===l?(l=65533,p=1):l>65535&&(l-=65536,n+=String.fromCharCode(l>>>10&1023|55296),l=56320|1023&l),n+=String.fromCharCode(l),i+=p;}return n}(this.buf,this.pos,t);return this.pos=t,e},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==iu.Bytes)return t.push(this.readVarint(e));var r=au(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==iu.Bytes)return t.push(this.readSVarint());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==iu.Bytes)return t.push(this.readBoolean());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==iu.Bytes)return t.push(this.readFloat());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==iu.Bytes)return t.push(this.readDouble());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==iu.Bytes)return t.push(this.readFixed32());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==iu.Bytes)return t.push(this.readSFixed32());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==iu.Bytes)return t.push(this.readFixed64());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==iu.Bytes)return t.push(this.readSFixed64());var e=au(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===iu.Varint)for(;this.buf[this.pos++]>127;);else if(e===iu.Bytes)this.pos=this.readVarint()+this.pos;else if(e===iu.Fixed32)this.pos+=4;else{if(e!==iu.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),gu(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),gu(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),gu(this.buf,-1&t,this.pos),gu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),gu(this.buf,-1&t,this.pos),gu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t;}(r,0,e),function(t,e){var r=(7&t)<<4;if(e.buf[e.pos++]|=r|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t;}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&su(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),ru(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),ru(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&su(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,iu.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,uu,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,lu,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,hu,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,pu,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,cu,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,fu,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,yu,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,du,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,mu,e);},writeBytesField:function(t,e){this.writeTag(t,iu.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,iu.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,iu.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,iu.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,iu.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,iu.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,iu.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,iu.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,iu.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,iu.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var bu=3;function _u(t,e,r){1===t&&r.readMessage(wu,e);}function wu(t,e,r){if(3===t){var n=r.readMessage(Au,{}),i=n.id,a=n.bitmap,o=n.width,s=n.height,u=n.left,l=n.top,p=n.advance;e.push({id:i,bitmap:new La({width:o+2*bu,height:s+2*bu},a),metrics:{width:o,height:s,left:u,top:l,advance:p}});}}function Au(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}var ku=bu,Su=function(t){var e=this;this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback();});};Su.prototype.trigger=function(){var t=this;this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout(function(){t._triggered=!1,t._callback();},0));};var zu=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},m(["receive","process"],this),this.invoker=new Su(this.process),this.target.addEventListener("message",this.receive,!1);};function Iu(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}zu.prototype.send=function(t,e,r,n){var i=this,a=++zu.taskId;r&&(this.callbacks[a]=r);var o=[];return this.target.postMessage({id:a,type:t,hasCallback:!!r,targetMapId:n,sourceMapId:this.mapId,data:bn(e,o)},o),{cancel:function(){r&&delete i.callbacks[a],i.target.postMessage({id:a,type:"<cancel>",targetMapId:n,sourceMapId:i.mapId});}}},zu.prototype.receive=function(t){var e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];var n=this.cancelCallbacks[r];delete this.cancelCallbacks[r],n&&n();}else this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger();},zu.prototype.process=function(){var t=this;if(this.taskQueue.length){var e=this.taskQueue.shift(),r=this.tasks[e];if(delete this.tasks[e],this.taskQueue.length&&this.invoker.trigger(),r)if("<response>"===r.type){var n=this.callbacks[e];delete this.callbacks[e],n&&(r.error?n(_n(r.error)):n(null,_n(r.data)));}else{var i=!1,a=r.hasCallback?function(r,n){i=!0,delete t.cancelCallbacks[e];var a=[];t.target.postMessage({id:e,type:"<response>",sourceMapId:t.mapId,error:r?bn(r):null,data:bn(n,a)},a);}:function(t){i=!0;},o=null,s=_n(r.data);if(this.parent[r.type])o=this.parent[r.type](r.sourceMapId,s,a);else if(this.parent.getWorkerSource){var u=r.type.split(".");o=this.parent.getWorkerSource(r.sourceMapId,u[0],s.source)[u[1]](s,a);}else a(new Error("Could not find function "+r.type));!i&&o&&o.cancel&&(this.cancelCallbacks[e]=o.cancel);}}},zu.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1);},zu.taskId=0;var Cu=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));};Cu.prototype.setNorthEast=function(t){return this._ne=t instanceof Bu?new Bu(t.lng,t.lat):Bu.convert(t),this},Cu.prototype.setSouthWest=function(t){return this._sw=t instanceof Bu?new Bu(t.lng,t.lat):Bu.convert(t),this},Cu.prototype.extend=function(t){var e,r,n=this._sw,i=this._ne;if(t instanceof Bu)e=t,r=t;else{if(!(t instanceof Cu))return Array.isArray(t)?t.every(Array.isArray)?this.extend(Cu.convert(t)):this.extend(Bu.convert(t)):this;if(e=t._sw,r=t._ne,!e||!r)return this}return n||i?(n.lng=Math.min(e.lng,n.lng),n.lat=Math.min(e.lat,n.lat),i.lng=Math.max(r.lng,i.lng),i.lat=Math.max(r.lat,i.lat)):(this._sw=new Bu(e.lng,e.lat),this._ne=new Bu(r.lng,r.lat)),this},Cu.prototype.getCenter=function(){return new Bu((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},Cu.prototype.getSouthWest=function(){return this._sw},Cu.prototype.getNorthEast=function(){return this._ne},Cu.prototype.getNorthWest=function(){return new Bu(this.getWest(),this.getNorth())},Cu.prototype.getSouthEast=function(){return new Bu(this.getEast(),this.getSouth())},Cu.prototype.getWest=function(){return this._sw.lng},Cu.prototype.getSouth=function(){return this._sw.lat},Cu.prototype.getEast=function(){return this._ne.lng},Cu.prototype.getNorth=function(){return this._ne.lat},Cu.prototype.toArray=function(){return [this._sw.toArray(),this._ne.toArray()]},Cu.prototype.toString=function(){return "LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},Cu.prototype.isEmpty=function(){return !(this._sw&&this._ne)},Cu.convert=function(t){return !t||t instanceof Cu?t:new Cu(t)};var Bu=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")");if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};Bu.prototype.wrap=function(){return new Bu(p(this.lng,-180,180),this.lat)},Bu.prototype.toArray=function(){return [this.lng,this.lat]},Bu.prototype.toString=function(){return "LngLat("+this.lng+", "+this.lat+")"},Bu.prototype.toBounds=function(t){void 0===t&&(t=0);var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new Cu(new Bu(this.lng-r,this.lat-e),new Bu(this.lng+r,this.lat+e))},Bu.convert=function(t){if(t instanceof Bu)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Bu(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Bu(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")};var Eu=2*Math.PI*6378137;function Pu(t){return Eu*Math.cos(t*Math.PI/180)}function Mu(t){return (180+t)/360}function Tu(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Vu(t,e){return t/Pu(e)}function Fu(t){var e=180-360*t;return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90}var Ou=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r;};Ou.fromLngLat=function(t,e){void 0===e&&(e=0);var r=Bu.convert(t);return new Ou(Mu(r.lng),Tu(r.lat),Vu(e,r.lat))},Ou.prototype.toLngLat=function(){return new Bu(360*this.x-180,Fu(this.y))},Ou.prototype.toAltitude=function(){return t=this.z,e=this.y,t*Pu(Fu(e));var t,e;},Ou.prototype.meterInMercatorCoordinateUnits=function(){return 1/Eu*(t=Fu(this.y),1/Math.cos(t*Math.PI/180));var t;};var Lu=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Ru(0,t,e,r);};Lu.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Lu.prototype.url=function(t,e){var r,n,i,a,o,s=(r=this.x,n=this.y,i=this.z,a=Iu(256*r,256*(n=Math.pow(2,i)-n-1),i),o=Iu(256*(r+1),256*(n+1),i),a[0]+","+a[1]+","+o[0]+","+o[1]),u=function(t,e,r){for(var n,i="",a=t;a>0;a--)i+=(e&(n=1<<a-1)?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",u).replace("{bbox-epsg-3857}",s)},Lu.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z);return new i((t.x*e-this.x)*aa,(t.y*e-this.y)*aa)};var Du=function(t,e){this.wrap=t,this.canonical=e,this.key=Ru(t,e.z,e.x,e.y);},Uu=function(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new Lu(r,+n,+i),this.key=Ru(e,t,n,i);};function Ru(t,e,r,n){(t*=2)<0&&(t=-1*t-1);var i=1<<e;return 32*(i*i*t+i*n+r)+e}Uu.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},Uu.prototype.scaledTo=function(t){var e=this.canonical.z-t;return t>this.canonical.z?new Uu(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Uu(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},Uu.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return !1;var e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},Uu.prototype.children=function(t){if(this.overscaledZ>=t)return [new Uu(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new Uu(e,this.wrap,e,r,n),new Uu(e,this.wrap,e,r+1,n),new Uu(e,this.wrap,e,r,n+1),new Uu(e,this.wrap,e,r+1,n+1)]},Uu.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},Uu.prototype.wrapped=function(){return new Uu(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},Uu.prototype.unwrapTo=function(t){return new Uu(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},Uu.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},Uu.prototype.toUnwrapped=function(){return new Du(this.wrap,this.canonical)},Uu.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},Uu.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new Ou(t.x-this.wrap,t.y))},gn("CanonicalTileID",Lu),gn("OverscaledTileID",Uu,{omit:["posMatrix"]});var ju=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return w('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".');var n=this.dim=e.height;this.stride=this.dim+2,this.data=new Int32Array(this.stride*this.stride);for(var i=e.data,a="terrarium"===r?this._unpackTerrarium:this._unpackMapbox,o=0;o<n;o++)for(var s=0;s<n;s++){var u=4*(o*n+s);this.set(s,o,a(i[u],i[u+1],i[u+2]));}for(var l=0;l<n;l++)this.set(-1,l,this.get(0,l)),this.set(n,l,this.get(n-1,l)),this.set(l,-1,this.get(l,0)),this.set(l,n,this.get(l,n-1));this.set(-1,-1,this.get(0,0)),this.set(n,-1,this.get(n-1,0)),this.set(-1,n,this.get(0,n-1)),this.set(n,n,this.get(n-1,n-1));};ju.prototype.set=function(t,e,r){this.data[this._idx(t,e)]=r+65536;},ju.prototype.get=function(t,e){return this.data[this._idx(t,e)]-65536},ju.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)},ju.prototype._unpackMapbox=function(t,e,r){return (256*t*256+256*e+r)/10-1e4},ju.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},ju.prototype.getPixels=function(){return new Da({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},ju.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");var n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,o=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=o-1;break;case 1:o=a+1;}for(var s=-e*this.dim,u=-r*this.dim,l=a;l<o;l++)for(var p=n;p<i;p++)this.set(p,l,t.get(p+s,l+u));},gn("DEMData",ju);var qu=ti([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);var Nu=function(t){this._stringToNumber={},this._numberToString=[];for(var e=0;e<t.length;e++){var r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}};Nu.prototype.encode=function(t){return this._stringToNumber[t]},Nu.prototype.decode=function(t){return this._numberToString[t]};var Ku=function(t,e,r,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,null!=t.id&&(this.id=t.id);},Xu={geometry:{configurable:!0}};Xu.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Xu.geometry.set=function(t){this._geometry=t;},Ku.prototype.toJSON=function(){var t={geometry:this.geometry};for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t},Object.defineProperties(Ku.prototype,Xu);var Zu=function(){this.state={},this.stateChanges={},this.deletedStates={};};Zu.prototype.updateState=function(t,e,r){var n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},c(this.stateChanges[t][n],r),null===this.deletedStates[t])for(var i in this.deletedStates[t]={},this.state[t])i!==n&&(this.deletedStates[t][i]=null);else if(this.deletedStates[t]&&null===this.deletedStates[t][n])for(var a in this.deletedStates[t][n]={},this.state[t][n])r[a]||(this.deletedStates[t][n][a]=null);else for(var o in r){this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][o]&&delete this.deletedStates[t][n][o];}},Zu.prototype.removeFeatureState=function(t,e,r){if(!(null===this.deletedStates[t])){var n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e&&e>=0)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e&&e>=0){if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;}else this.deletedStates[t]=null;}},Zu.prototype.getState=function(t,e){var r=String(e),n=this.state[t]||{},i=this.stateChanges[t]||{},a=c({},n[r],i[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){var o=this.deletedStates[t][e];if(null===o)return {};for(var s in o)delete a[s];}return a},Zu.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e);},Zu.prototype.coalesceChanges=function(t,e){var r={};for(var n in this.stateChanges){this.state[n]=this.state[n]||{};var i={};for(var a in this.stateChanges[n])this.state[n][a]||(this.state[n][a]={}),c(this.state[n][a],this.stateChanges[n][a]),i[a]=this.state[n][a];r[n]=i;}for(var o in this.deletedStates){this.state[o]=this.state[o]||{};var s={};if(null===this.deletedStates[o])for(var u in this.state[o])s[u]={},this.state[o][u]={};else for(var l in this.deletedStates[o]){if(null===this.deletedStates[o][l])this.state[o][l]={};else for(var p=0,h=Object.keys(this.deletedStates[o][l]);p<h.length;p+=1){var f=h[p];delete this.state[o][l][f];}s[l]=this.state[o][l];}r[o]=r[o]||{},c(r[o],s);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var y in t){t[y].setFeatureState(r,e);}};var Gu=function(t,e,r){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=e||new fn(aa,16,0),this.grid3D=new fn(aa,16,0),this.featureIndexArray=r||new Vi;};function Ju(t){for(var e=1/0,r=1/0,n=-1/0,i=-1/0,a=0,o=t;a<o.length;a+=1){var s=o[a];e=Math.min(e,s.x),r=Math.min(r,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);}return {minX:e,minY:r,maxX:n,maxY:i}}function Hu(t,e){return e-t}Gu.prototype.insert=function(t,e,r,n,i,a){var o=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);for(var s=a?this.grid3D:this.grid,u=0;u<e.length;u++){for(var l=e[u],p=[1/0,1/0,-1/0,-1/0],c=0;c<l.length;c++){var h=l[c];p[0]=Math.min(p[0],h.x),p[1]=Math.min(p[1],h.y),p[2]=Math.max(p[2],h.x),p[3]=Math.max(p[3],h.y);}p[0]<aa&&p[1]<aa&&p[2]>=0&&p[3]>=0&&s.insert(o,p[0],p[1],p[2],p[3]);}},Gu.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new Lo.VectorTile(new nu(this.rawTileData)).layers,this.sourceLayerCoder=new Nu(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},Gu.prototype.query=function(t,e,r){var n=this;this.loadVTLayers();for(var a=t.params||{},o=aa/t.tileSize/t.scale,s=Rr(a.filter),u=t.queryGeometry,l=t.queryPadding*o,p=Ju(u),c=this.grid.query(p.minX-l,p.minY-l,p.maxX+l,p.maxY+l),h=Ju(t.cameraQueryGeometry),f=this.grid3D.query(h.minX-l,h.minY-l,h.maxX+l,h.maxY+l,function(e,r,n,a){return function(t,e,r,n,a){for(var o=0,s=t;o<s.length;o+=1){var u=s[o];if(e<=u.x&&r<=u.y&&n>=u.x&&a>=u.y)return !0}var l=[new i(e,r),new i(e,a),new i(n,a),new i(n,r)];if(t.length>2)for(var p=0,c=l;p<c.length;p+=1){if(ba(t,c[p]))return !0}for(var h=0;h<t.length-1;h++){if(_a(t[h],t[h+1],l))return !0}return !1}(t.cameraQueryGeometry,e-l,r-l,n+l,a+l)}),y=0,d=f;y<d.length;y+=1){var m=d[y];c.push(m);}c.sort(Hu);for(var v,g={},x=function(i){var l=c[i];if(l!==v){v=l;var p=n.featureIndexArray.get(l),h=null;n.loadMatchingFeature(g,p.bucketIndex,p.sourceLayerIndex,p.featureIndex,s,a.layers,e,function(e,i){h||(h=ua(e));var a={};return e.id&&(a=r.getState(i.sourceLayer||"_geojsonTileLayer",e.id)),i.queryIntersectsFeature(u,e,a,h,n.z,t.transform,o,t.pixelPosMatrix)});}},b=0;b<c.length;b++)x(b);return g},Gu.prototype.loadMatchingFeature=function(t,e,r,n,i,a,o,s){var u=this.bucketLayerIDs[e];if(!a||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,u)){var l=this.sourceLayerCoder.decode(r),p=this.vtLayers[l].feature(n);if(i(new Fn(this.tileID.overscaledZ),p))for(var c=0;c<u.length;c++){var h=u[c];if(!(a&&a.indexOf(h)<0)){var f=o[h];if(f){var y=!s||s(p,f);if(y){var d=new Ku(p,this.z,this.x,this.y);d.layer=f.serialize();var m=t[h];void 0===m&&(m=t[h]=[]),m.push({featureIndex:n,feature:d,intersectionZ:y});}}}}}},Gu.prototype.lookupSymbolFeatures=function(t,e,r,n,i,a){var o={};this.loadVTLayers();for(var s=Rr(n),u=0,l=t;u<l.length;u+=1){var p=l[u];this.loadMatchingFeature(o,e,r,p,s,i,a);}return o},Gu.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var n=0,i=r[e];n<i.length;n+=1){if(t===i[n])return !0}return !1},gn("FeatureIndex",Gu,{omit:["rawTileData","sourceLayerCoder"]});var Yu=function(t,e){this.tileID=t,this.uid=f(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.expiredRequestCount=0,this.state="loading";};Yu.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded;e<V.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);},Yu.prototype.wasRequested=function(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state},Yu.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var n in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={};if(!e)return r;for(var n=function(){var t=a[i],n=t.layerIds.map(function(t){return e.getLayer(t)}).filter(Boolean);if(0!==n.length){t.layers=n,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map(function(t){return n.filter(function(e){return e.id===t})[0]}));for(var o=0,s=n;o<s.length;o+=1){var u=s[o];r[u.id]=t;}}},i=0,a=t;i<a.length;i+=1)n();return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var i=this.buckets[n];if(i instanceof Fs){if(this.hasSymbolBuckets=!0,!r)break;i.justReloaded=!0;}}for(var a in this.queryPadding=0,this.buckets){var o=this.buckets[a];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(a).queryRadius(o));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage);}else this.collisionBoxArray=new ki;},Yu.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";},Yu.prototype.unloadDEMData=function(){this.dem=null,this.neighboringTiles=null,this.state="unloaded";},Yu.prototype.getBucket=function(t){return this.buckets[t.id]},Yu.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e];r.uploadPending()&&r.upload(t);}var n=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new tu(t,this.imageAtlas.image,n.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new tu(t,this.glyphAtlasImage,n.ALPHA),this.glyphAtlasImage=null);},Yu.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);},Yu.prototype.queryRenderedFeatures=function(t,e,r,n,i,a,o,s,u){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:n,scale:i,tileSize:this.tileSize,pixelPosMatrix:u,transform:o,params:a,queryPadding:this.queryPadding*s},t,e):{}},Yu.prototype.querySourceFeatures=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData){var r=this.latestFeatureIndex.loadVTLayers(),n=e?e.sourceLayer:"",i=r._geojsonTileLayer||r[n];if(i)for(var a=Rr(e&&e.filter),o=this.tileID.canonical,s=o.z,u=o.x,l=o.y,p={z:s,x:u,y:l},c=0;c<i.length;c++){var h=i.feature(c);if(a(new Fn(this.tileID.overscaledZ),h)){var f=new Ku(h,s,u,l);f.tile=p,t.push(f);}}}},Yu.prototype.clearMask=function(){this.segments&&(this.segments.destroy(),delete this.segments),this.maskedBoundsBuffer&&(this.maskedBoundsBuffer.destroy(),delete this.maskedBoundsBuffer),this.maskedIndexBuffer&&(this.maskedIndexBuffer.destroy(),delete this.maskedIndexBuffer);},Yu.prototype.setMask=function(t,e){if(!o(this.mask,t)&&(this.mask=t,this.clearMask(),!o(t,{0:!0}))){var r=new ni,n=new gi;this.segments=new Oi,this.segments.prepareSegment(0,r,n);for(var a=Object.keys(t),s=0;s<a.length;s++){var u=t[+a[s]],l=aa>>u.z,p=new i(u.x*l,u.y*l),c=new i(p.x+l,p.y+l),h=this.segments.prepareSegment(4,r,n);r.emplaceBack(p.x,p.y,p.x,p.y),r.emplaceBack(c.x,p.y,c.x,p.y),r.emplaceBack(p.x,c.y,p.x,c.y),r.emplaceBack(c.x,c.y,c.x,c.y);var f=h.vertexLength;n.emplaceBack(f,f+1,f+2),n.emplaceBack(f+1,f+2,f+3),h.vertexLength+=4,h.primitiveLength+=2;}this.maskedBoundsBuffer=e.createVertexBuffer(r,qu.members),this.maskedIndexBuffer=e.createIndexBuffer(n);}},Yu.prototype.hasData=function(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state},Yu.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},Yu.prototype.setExpiryData=function(t){var e=this.expirationTime;if(t.cacheControl){var r=S(t.cacheControl);r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){var n=Date.now(),i=!1;if(this.expirationTime>n)i=!1;else if(e)if(this.expirationTime<e)i=!0;else{var a=this.expirationTime-e;a?this.expirationTime=n+Math.max(a,3e4):i=!0;}else i=!0;i?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}},Yu.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},Yu.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers();for(var n in this.buckets){var i=this.buckets[n],a=i.layers[0].sourceLayer||"_geojsonTileLayer",o=r[a],s=t[a];o&&s&&0!==Object.keys(s).length&&(i.update(s,o,this.imageAtlas&&this.imageAtlas.patternPositions||{}),e&&e.style&&(this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(n).queryRadius(i))));}}},Yu.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},Yu.prototype.symbolFadeFinished=function(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<V.now()},Yu.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0;},Yu.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=V.now()+t;};function $u(t,e,r,n,i){if(void 0===e.segment)return !0;for(var a=e,o=e.segment+1,s=0;s>-r/2;){if(--o<0)return !1;s-=t[o].dist(a),a=t[o];}s+=t[o].dist(t[o+1]),o++;for(var u=[],l=0;s<r/2;){var p=t[o-1],c=t[o],h=t[o+1];if(!h)return !1;var f=p.angleTo(c)-c.angleTo(h);for(f=Math.abs((f+3*Math.PI)%(2*Math.PI)-Math.PI),u.push({distance:s,angleDelta:f}),l+=f;s-u[0].distance>n;)l-=u.shift().angleDelta;if(l>i)return !1;o++,s+=c.dist(h);}return !0}function Wu(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function Qu(t,e,r){return t?.6*e*r:0}function tl(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function el(t,e,r,n,i,a){for(var o=Qu(r,i,a),s=tl(r,n)*a,u=0,l=Wu(t)/2,p=0;p<t.length-1;p++){var c=t[p],h=t[p+1],f=c.dist(h);if(u+f>l){var y=(l-u)/f,d=we(c.x,h.x,y),m=we(c.y,h.y,y),v=new As(d,m,h.angleTo(c),p);return v._round(),!o||$u(t,v,s,o,e)?v:void 0}u+=f;}}function rl(t,e,r,n,i,a,o,s,u){var l=Qu(n,a,o),p=tl(n,i),c=p*o,h=0===t[0].x||t[0].x===u||0===t[0].y||t[0].y===u;return e-c<e/4&&(e=c+e/4),function t(e,r,n,i,a,o,s,u,l){var p=o/2;var c=Wu(e);var h=0,f=r-n;var y=[];for(var d=0;d<e.length-1;d++){for(var m=e[d],v=e[d+1],g=m.dist(v),x=v.angleTo(m);f+n<h+g;){var b=((f+=n)-h)/g,_=we(m.x,v.x,b),w=we(m.y,v.y,b);if(_>=0&&_<l&&w>=0&&w<l&&f-p>=0&&f+p<=c){var A=new As(_,w,x,d);A._round(),i&&!$u(e,A,o,i,a)||y.push(A);}}h+=g;}u||y.length||s||(y=t(e,h/2,n,i,a,o,s,!0,l));return y}(t,h?e/2*s%e:(p/2+2*a)*o*s%e,e,l,r,c,h,!1,u)}var nl=function(t,e,r,n,a,o,s,u,l,p,c,h){var f=s.top*u-l,y=s.bottom*u+l,d=s.left*u-l,m=s.right*u+l;if(this.boxStartIndex=t.length,p){var v=y-f,g=m-d;v>0&&(v=Math.max(10*u,v),this._addLineCollisionCircles(t,e,r,r.segment,g,v,n,a,o,c));}else{if(h){var x=new i(d,f),b=new i(m,f),_=new i(d,y),w=new i(m,y),A=h*Math.PI/180;x._rotate(A),b._rotate(A),_._rotate(A),w._rotate(A),d=Math.min(x.x,b.x,_.x,w.x),m=Math.max(x.x,b.x,_.x,w.x),f=Math.min(x.y,b.y,_.y,w.y),y=Math.max(x.y,b.y,_.y,w.y);}t.emplaceBack(r.x,r.y,d,f,m,y,n,a,o,0,0);}this.boxEndIndex=t.length;};nl.prototype._addLineCollisionCircles=function(t,e,r,n,i,a,o,s,u,l){var p=a/2,c=Math.floor(i/p)||1,h=1+.4*Math.log(l)/Math.LN2,f=Math.floor(c*h/2),y=-a/2,d=r,m=n+1,v=y,g=-i/2,x=g-i/4;do{if(--m<0){if(v>g)return;m=0;break}v-=e[m].dist(d),d=e[m];}while(v>x);for(var b=e[m].dist(e[m+1]),_=-f;_<c+f;_++){var w=_*p,A=g+w;if(w<0&&(A+=w),w>i&&(A+=w-i),!(A<v)){for(;v+b<A;){if(v+=b,++m+1>=e.length)return;b=e[m].dist(e[m+1]);}var k=A-v,S=e[m],z=e[m+1].sub(S)._unit()._mult(k)._add(S)._round(),I=Math.abs(A-y)<p?0:.8*(A-y);t.emplaceBack(z.x,z.y,-a/2,-a/2,a/2,a/2,o,s,u,a/2,I);}}};var il=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=al),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r);};function al(t,e){return t<e?-1:t>e?1:0}function ol(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1);for(var n=1/0,a=1/0,o=-1/0,s=-1/0,u=t[0],l=0;l<u.length;l++){var p=u[l];(!l||p.x<n)&&(n=p.x),(!l||p.y<a)&&(a=p.y),(!l||p.x>o)&&(o=p.x),(!l||p.y>s)&&(s=p.y);}var c=o-n,h=s-a,f=Math.min(c,h),y=f/2,d=new il([],sl);if(0===f)return new i(n,a);for(var m=n;m<o;m+=f)for(var v=a;v<s;v+=f)d.push(new ul(m+y,v+y,y,t));for(var g=function(t){for(var e=0,r=0,n=0,i=t[0],a=0,o=i.length,s=o-1;a<o;s=a++){var u=i[a],l=i[s],p=u.x*l.y-l.x*u.y;r+=(u.x+l.x)*p,n+=(u.y+l.y)*p,e+=3*p;}return new ul(r/e,n/e,0,t)}(t),x=d.length;d.length;){var b=d.pop();(b.d>g.d||!g.d)&&(g=b,r&&console.log("found best %d after %d probes",Math.round(1e4*b.d)/1e4,x)),b.max-g.d<=e||(y=b.h/2,d.push(new ul(b.p.x-y,b.p.y-y,y,t)),d.push(new ul(b.p.x+y,b.p.y-y,y,t)),d.push(new ul(b.p.x-y,b.p.y+y,y,t)),d.push(new ul(b.p.x+y,b.p.y+y,y,t)),x+=4);}return r&&(console.log("num probes: "+x),console.log("best distance: "+g.d)),g.p}function sl(t,e){return e.max-t.max}function ul(t,e,r,n){this.p=new i(t,e),this.h=r,this.d=function(t,e){for(var r=!1,n=1/0,i=0;i<e.length;i++)for(var a=e[i],o=0,s=a.length,u=s-1;o<s;u=o++){var l=a[o],p=a[u];l.y>t.y!=p.y>t.y&&t.x<(p.x-l.x)*(t.y-l.y)/(p.y-l.y)+l.x&&(r=!r),n=Math.min(n,ga(t,l,p));}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}il.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1);},il.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},il.prototype.peek=function(){return this.data[0]},il.prototype._up=function(t){for(var e=this.data,r=this.compare,n=e[t];t>0;){var i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;},il.prototype._down=function(t){for(var e=this.data,r=this.compare,n=this.length>>1,i=e[t];t<n;){var a=1+(t<<1),o=e[a],s=a+1;if(s<this.length&&r(e[s],o)<0&&(a=s,o=e[s]),r(o,i)>=0)break;e[t]=o,t=a;}e[t]=i;};var ll=e(function(t){t.exports=function(t,e){var r,n,i,a,o,s,u,l;for(r=3&t.length,n=t.length-r,i=e,o=3432918353,s=461845907,l=0;l<n;)u=255&t.charCodeAt(l)|(255&t.charCodeAt(++l))<<8|(255&t.charCodeAt(++l))<<16|(255&t.charCodeAt(++l))<<24,++l,i=27492+(65535&(a=5*(65535&(i=(i^=u=(65535&(u=(u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(u=0,r){case 3:u^=(255&t.charCodeAt(l+2))<<16;case 2:u^=(255&t.charCodeAt(l+1))<<8;case 1:i^=u=(65535&(u=(u=(65535&(u^=255&t.charCodeAt(l)))*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};}),pl=e(function(t){t.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};}),cl=ll,hl=ll,fl=pl;cl.murmur3=hl,cl.murmur2=fl;var yl=7;function dl(t,e){var r=0,n=0,i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-yl;break;case"bottom-right":case"bottom-left":n=-i+yl;break;case"bottom":n=-e+yl;break;case"top":n=e-yl;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}function ml(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}var vl=65535;function gl(t,e,r,n,a,o,s,u,l,p,c,h,f){var y=function(t,e,r,n,a,o,s,u){for(var l=n.layout.get("text-rotate").evaluate(o,{})*Math.PI/180,p=e.positionedGlyphs,c=[],h=0;h<p.length;h++){var f=p[h],y=s[f.fontStack],d=y&&y[f.glyph];if(d){var m=d.rect;if(m){var v=ku+1,g=d.metrics.advance*f.scale/2,x=a?[f.x+g,f.y]:[0,0],b=a?[0,0]:[f.x+g+r[0],f.y+r[1]],_=(a||u)&&f.vertical,w=[0,0];_&&(w=b,b=[0,0]);var A=(d.metrics.left-v)*f.scale-g+b[0],k=(-d.metrics.top-v)*f.scale+b[1],S=A+m.w*f.scale,z=k+m.h*f.scale,I=new i(A,k),C=new i(S,k),B=new i(A,z),E=new i(S,z);if(_){var P=new i(-g,g-e.yOffset),M=-Math.PI/2,T=cs/2-g,V=new i(5-e.yOffset-T,0),F=new(Function.prototype.bind.apply(i,[null].concat(w)));I._rotateAround(M,P)._add(V)._add(F),C._rotateAround(M,P)._add(V)._add(F),B._rotateAround(M,P)._add(V)._add(F),E._rotateAround(M,P)._add(V)._add(F);}if(l){var O=Math.sin(l),L=Math.cos(l),D=[L,-O,O,L];I._matMult(D),C._matMult(D),B._matMult(D),E._matMult(D);}c.push({tl:I,tr:C,bl:B,br:E,tex:m,writingMode:e.writingMode,glyphOffset:x,sectionIndex:f.sectionIndex});}}}return c}(0,r,s,n,a,o,h,t.allowVerticalPlacement),d=t.textSizeData,m=null;"source"===d.kind?(m=[ks*n.layout.get("text-size").evaluate(o,{})])[0]>vl&&w(t.layerIds[0]+': Value for "text-size" is >= 256. Reduce your "text-size".'):"composite"===d.kind&&((m=[ks*f.compositeTextSizes[0].evaluate(o,{}),ks*f.compositeTextSizes[1].evaluate(o,{})])[0]>vl||m[1]>vl)&&w(t.layerIds[0]+': Value for "text-size" is >= 256. Reduce your "text-size".'),t.addSymbols(t.text,y,m,s,a,o,l,e,u.lineStartIndex,u.lineLength);for(var v=0,g=p;v<g.length;v+=1){c[g[v]]=t.text.placedSymbolArray.length-1;}return 4*y.length}function xl(t){for(var e in t)return t[e];return null}function bl(t,e,r,n){var i=t.compareText;if(e in i){for(var a=i[e],o=a.length-1;o>=0;o--)if(n.dist(a[o])<r)return !0}else i[e]=[];return i[e].push(n),!1}t.Actor=zu,t.AlphaImage=La,t.CanonicalTileID=Lu,t.CollisionBoxArray=ki,t.Color=Ht,t.DEMData=ju,t.DataConstantProperty=Kn,t.DictionaryCoder=Nu,t.EXTENT=aa,t.ErrorEvent=kt,t.EvaluationParameters=Fn,t.Event=At,t.Evented=St,t.FeatureIndex=Gu,t.FillBucket=ko,t.FillExtrusionBucket=jo,t.ImageAtlas=Hs,t.ImagePosition=Gs,t.LineBucket=Wo,t.LngLat=Bu,t.LngLatBounds=Cu,t.MercatorCoordinate=Ou,t.ONE_EM=cs,t.OverscaledTileID=Uu,t.Point=i,t.Point$1=i,t.ProgramConfiguration=ea,t.Properties=Hn,t.Protobuf=nu,t.RGBAImage=Da,t.RequestManager=j,t.ResourceType=pt,t.SegmentVector=Oi,t.SourceFeatureState=Zu,t.StructArrayLayout1ui2=bi,t.StructArrayLayout2i4=ri,t.StructArrayLayout2ui4=xi,t.StructArrayLayout3ui6=gi,t.StructArrayLayout4i8=ni,t.SymbolBucket=Fs,t.Texture=tu,t.Tile=Yu,t.Transitionable=Dn,t.Uniform1f=qi,t.Uniform1i=ji,t.Uniform2f=Ni,t.Uniform3f=Ki,t.Uniform4f=Xi,t.UniformColor=Zi,t.UniformMatrix4f=Ji,t.UnwrappedTileID=Du,t.ValidationError=It,t.WritingMode=hs,t.ZoomHistory=wn,t.addDynamicAttributes=Ms,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);var n=t.length,i=new Array(t.length),a=null;t.forEach(function(t,o){e(t,function(t,e){t&&(a=t),i[o]=e,0==--n&&r(a,i);});});},t.bezier=s,t.bindAll=m,t.browser=V,t.cacheEntryPossiblyAdded=function(t){++lt>it&&(t.getActor().send("enforceCacheSizeLimit",nt),lt=0);},t.clamp=l,t.clearTileCache=function(t){var e=self.caches.delete(rt);t&&e.catch(t).then(function(){return t()});},t.clone=function(t){var e=new Ia(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=b,t.config=F,t.create=function(){var t=new Ia(16);return Ia!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new Ia(9);return Ia!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new Ia(4);return Ia!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=Ir,t.createLayout=ti,t.createStyleLayer=function(t){return "custom"===t.type?new Ks(t):new Xs[t.type](t)},t.deepEqual=o,t.ease=u,t.emitValidationErrors=hn,t.endsWith=v,t.enforceCacheSizeLimit=function(t){self.caches&&self.caches.open(rt).then(function(e){e.keys().then(function(r){for(var n=0;n<r.length-t;n++)e.delete(r[n]);});});},t.evaluateRadialOffset=dl,t.evaluateSizeForFeature=zs,t.evaluateSizeForZoom=Is,t.evented=Tn,t.extend=c,t.featureFilter=Rr,t.filterObject=x,t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=_s,t.getAnchorJustification=ml,t.getArrayBuffer=mt,t.getImage=bt,t.getJSON=function(t,e){return dt(c(t,{type:"json"}),e)},t.getReferrer=ft,t.getVideo=function(t,e){var r,n,i=self.document.createElement("video");i.muted=!0,i.onloadstart=function(){e(null,i);};for(var a=0;a<t.length;a++){var o=self.document.createElement("source");r=t[a],n=void 0,(n=self.document.createElement("a")).href=r,(n.protocol!==self.document.location.protocol||n.host!==self.document.location.host)&&(i.crossOrigin="Anonymous"),o.src=t[a],i.appendChild(o);}return {cancel:function(){}}},t.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],l=e[7],p=e[8],c=e[9],h=e[10],f=e[11],y=e[12],d=e[13],m=e[14],v=e[15],g=r*s-n*o,x=r*u-i*o,b=r*l-a*o,_=n*u-i*s,w=n*l-a*s,A=i*l-a*u,k=p*d-c*y,S=p*m-h*y,z=p*v-f*y,I=c*m-h*d,C=c*v-f*d,B=h*v-f*m,E=g*B-x*C+b*I+_*z-w*S+A*k;return E?(E=1/E,t[0]=(s*B-u*C+l*I)*E,t[1]=(i*C-n*B-a*I)*E,t[2]=(d*A-m*w+v*_)*E,t[3]=(h*w-c*A-f*_)*E,t[4]=(u*z-o*B-l*S)*E,t[5]=(r*B-i*z+a*S)*E,t[6]=(m*b-y*A-v*x)*E,t[7]=(p*A-h*b+f*x)*E,t[8]=(o*C-s*z+l*k)*E,t[9]=(n*z-r*C-a*k)*E,t[10]=(y*w-d*b+v*g)*E,t[11]=(c*b-p*w-f*g)*E,t[12]=(s*S-o*I-u*k)*E,t[13]=(r*I-n*S+i*k)*E,t[14]=(d*x-y*_-m*g)*E,t[15]=(p*_-c*x+h*g)*E,t):null},t.isChar=An,t.isMapboxURL=q,t.keysDifference=function(t,e){var r=[];for(var n in t)n in e||r.push(n);return r},t.makeRequest=dt,t.mapObject=g,t.mercatorXfromLng=Mu,t.mercatorYfromLat=Tu,t.mercatorZfromAltitude=Vu,t.multiply=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],d=e[12],m=e[13],v=e[14],g=e[15],x=r[0],b=r[1],_=r[2],w=r[3];return t[0]=x*n+b*s+_*c+w*d,t[1]=x*i+b*u+_*h+w*m,t[2]=x*a+b*l+_*f+w*v,t[3]=x*o+b*p+_*y+w*g,x=r[4],b=r[5],_=r[6],w=r[7],t[4]=x*n+b*s+_*c+w*d,t[5]=x*i+b*u+_*h+w*m,t[6]=x*a+b*l+_*f+w*v,t[7]=x*o+b*p+_*y+w*g,x=r[8],b=r[9],_=r[10],w=r[11],t[8]=x*n+b*s+_*c+w*d,t[9]=x*i+b*u+_*h+w*m,t[10]=x*a+b*l+_*f+w*v,t[11]=x*o+b*p+_*y+w*g,x=r[12],b=r[13],_=r[14],w=r[15],t[12]=x*n+b*s+_*c+w*d,t[13]=x*i+b*u+_*h+w*m,t[14]=x*a+b*l+_*f+w*v,t[15]=x*o+b*p+_*y+w*g,t},t.mvt=Lo,t.number=we,t.ortho=function(t,e,r,n,i,a,o){var s=1/(e-r),u=1/(n-i),l=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*u,t[14]=(o+a)*l,t[15]=1,t},t.parseGlyphPBF=function(t){return new nu(t).readFields(_u,[])},t.pbf=nu,t.performSymbolLayout=function(t,e,r,n,a,o){t.createArrays();var s=512*t.overscaling;t.tilePixelRatio=aa/s,t.compareText={},t.iconsNeedLinear=!1;var u=t.layers[0].layout,l=t.layers[0]._unevaluatedLayout._values,p={};if("composite"===t.textSizeData.kind){var c=t.textSizeData,h=c.minZoom,f=c.maxZoom;p.compositeTextSizes=[l["text-size"].possiblyEvaluate(new Fn(h)),l["text-size"].possiblyEvaluate(new Fn(f))];}if("composite"===t.iconSizeData.kind){var y=t.iconSizeData,d=y.minZoom,m=y.maxZoom;p.compositeIconSizes=[l["icon-size"].possiblyEvaluate(new Fn(d)),l["icon-size"].possiblyEvaluate(new Fn(m))];}p.layoutTextSize=l["text-size"].possiblyEvaluate(new Fn(t.zoom+1)),p.layoutIconSize=l["icon-size"].possiblyEvaluate(new Fn(t.zoom+1)),p.textMaxSize=l["text-size"].possiblyEvaluate(new Fn(18));for(var v=u.get("text-line-height")*cs,g="map"===u.get("text-rotation-alignment")&&"point"!==u.get("symbol-placement"),x=u.get("text-keep-upright"),b=function(){var o=A[_],s=u.get("text-font").evaluate(o,{}).join(","),l=r,c={horizontal:{},vertical:void 0},h=o.text,f=[0,0];if(h){var y=h.toString(),d=u.get("text-letter-spacing").evaluate(o,{})*cs,m=function(t){for(var e=0,r=t;e<r.length;e+=1){if(!Sn(r[e].charCodeAt(0)))return !1}return !0}(y)?d:0,b=u.get("text-anchor").evaluate(o,{}),k=u.get("text-variable-anchor"),S=u.get("text-radial-offset").evaluate(o,{});k||(f=S?dl(b,S*cs):u.get("text-offset").evaluate(o,{}).map(function(t){return t*cs}));var z=g?"center":u.get("text-justify").evaluate(o,{}),I="point"===u.get("symbol-placement")?u.get("text-max-width").evaluate(o,{})*cs:0,C=function(){t.allowVerticalPlacement&&kn(y)&&(c.vertical=ys(h,e,s,I,v,b,"left",m,f,hs.vertical,!0));};if(!g&&k){for(var B="auto"===z?k.map(function(t){return ml(t)}):[z],E=!1,P=0;P<B.length;P++){var M=B[P];if(!c.horizontal[M])if(E)c.horizontal[M]=c.horizontal[0];else{var T=ys(h,e,s,I,v,"center",M,m,f,hs.horizontal,!1);T&&(c.horizontal[M]=T,E=1===T.lineCount);}}C();}else{"auto"===z&&(z=ml(b));var V=ys(h,e,s,I,v,b,z,m,f,hs.horizontal,!1);V&&(c.horizontal[z]=V),C(),kn(y)&&g&&x&&(c.vertical=ys(h,e,s,I,v,b,z,m,f,hs.vertical,!1));}}var F=void 0;if(o.icon){var O=n[o.icon];O&&(F=function(t,e,r){var n=_s(r),i=n.horizontalAlign,a=n.verticalAlign,o=e[0],s=e[1],u=o-t.displaySize[0]*i,l=u+t.displaySize[0],p=s-t.displaySize[1]*a;return {image:t,top:p,bottom:p+t.displaySize[1],left:u,right:l}}(a[o.icon],u.get("icon-offset").evaluate(o,{}),u.get("icon-anchor").evaluate(o,{})),void 0===t.sdfIcons?t.sdfIcons=O.sdf:t.sdfIcons!==O.sdf&&w("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),O.pixelRatio!==t.pixelRatio?t.iconsNeedLinear=!0:0!==u.get("icon-rotate").constantOr(1)&&(t.iconsNeedLinear=!0));}(Object.keys(c.horizontal).length||F)&&function(t,e,r,n,a,o,s){var u=o.layoutTextSize.evaluate(e,{}),l=o.layoutIconSize.evaluate(e,{}),p=o.textMaxSize.evaluate(e,{});void 0===p&&(p=u);var c=t.layers[0].layout,h=c.get("icon-offset").evaluate(e,{}),f=xl(r.horizontal),y=u/24,d=t.tilePixelRatio*y,m=t.tilePixelRatio*p/24,v=t.tilePixelRatio*l,g=t.tilePixelRatio*c.get("symbol-spacing"),x=c.get("text-padding")*t.tilePixelRatio,b=c.get("icon-padding")*t.tilePixelRatio,_=c.get("text-max-angle")/180*Math.PI,A="map"===c.get("text-rotation-alignment")&&"point"!==c.get("symbol-placement"),k="map"===c.get("icon-rotation-alignment")&&"point"!==c.get("symbol-placement"),S=c.get("symbol-placement"),z=g/2,I=function(u,l){l.x<0||l.x>=aa||l.y<0||l.y>=aa||function(t,e,r,n,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_){var A,k,S,z=t.addToLineVertexArray(e,r),I=0,C=0,B=0,E={},P=cl(""),M=(o.layout.get("text-radial-offset").evaluate(x,{})||0)*cs;if(t.allowVerticalPlacement&&n.vertical){var T=o.layout.get("text-rotate").evaluate(x,{})+90,V=n.vertical;S=new nl(s,r,e,u,l,p,V,c,h,f,t.overscaling,T);}for(var F in n.horizontal){var O=n.horizontal[F];if(!A){P=cl(O.text);var L=o.layout.get("text-rotate").evaluate(x,{});A=new nl(s,r,e,u,l,p,O,c,h,f,t.overscaling,L);}var D=1===O.lineCount;if(C+=gl(t,e,O,o,f,x,y,z,n.vertical?hs.horizontal:hs.horizontalOnly,D?Object.keys(n.horizontal):[F],E,b,_),D)break}n.vertical&&(B+=gl(t,e,n.vertical,o,f,x,y,z,hs.vertical,["vertical"],E,b,_));var U=A?A.boxStartIndex:t.collisionBoxArray.length,R=A?A.boxEndIndex:t.collisionBoxArray.length,j=S?S.boxStartIndex:t.collisionBoxArray.length,q=S?S.boxEndIndex:t.collisionBoxArray.length;if(a){var N=function(t,e,r,n,a,o){var s,u,l,p,c=e.image,h=r.layout,f=e.top-1/c.pixelRatio,y=e.left-1/c.pixelRatio,d=e.bottom+1/c.pixelRatio,m=e.right+1/c.pixelRatio;if("none"!==h.get("icon-text-fit")&&a){var v=m-y,g=d-f,x=h.get("text-size").evaluate(o,{})/24,b=a.left*x,_=a.right*x,w=a.top*x,A=_-b,k=a.bottom*x-w,S=h.get("icon-text-fit-padding")[0],z=h.get("icon-text-fit-padding")[1],I=h.get("icon-text-fit-padding")[2],C=h.get("icon-text-fit-padding")[3],B="width"===h.get("icon-text-fit")?.5*(k-g):0,E="height"===h.get("icon-text-fit")?.5*(A-v):0,P="width"===h.get("icon-text-fit")||"both"===h.get("icon-text-fit")?A:v,M="height"===h.get("icon-text-fit")||"both"===h.get("icon-text-fit")?k:g;s=new i(b+E-C,w+B-S),u=new i(b+E+z+P,w+B-S),l=new i(b+E+z+P,w+B+I+M),p=new i(b+E-C,w+B+I+M);}else s=new i(y,f),u=new i(m,f),l=new i(m,d),p=new i(y,d);var T=r.layout.get("icon-rotate").evaluate(o,{})*Math.PI/180;if(T){var V=Math.sin(T),F=Math.cos(T),O=[F,-V,V,F];s._matMult(O),u._matMult(O),p._matMult(O),l._matMult(O);}return [{tl:s,tr:u,bl:p,br:l,tex:c.paddedRect,writingMode:void 0,glyphOffset:[0,0],sectionIndex:0}]}(0,a,o,0,xl(n.horizontal),x),K=o.layout.get("icon-rotate").evaluate(x,{});k=new nl(s,r,e,u,l,p,a,d,m,!1,t.overscaling,K),I=4*N.length;var X=t.iconSizeData,Z=null;"source"===X.kind?(Z=[ks*o.layout.get("icon-size").evaluate(x,{})])[0]>vl&&w(t.layerIds[0]+': Value for "icon-size" is >= 256. Reduce your "icon-size".'):"composite"===X.kind&&((Z=[ks*_.compositeIconSizes[0].evaluate(x,{}),ks*_.compositeIconSizes[1].evaluate(x,{})])[0]>vl||Z[1]>vl)&&w(t.layerIds[0]+': Value for "icon-size" is >= 256. Reduce your "icon-size".'),t.addSymbols(t.icon,N,Z,g,v,x,!1,e,z.lineStartIndex,z.lineLength);}var G=k?k.boxStartIndex:t.collisionBoxArray.length,J=k?k.boxEndIndex:t.collisionBoxArray.length;t.glyphOffsetArray.length>=Fs.MAX_GLYPHS&&w("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");t.symbolInstances.emplaceBack(e.x,e.y,E.right>=0?E.right:-1,E.center>=0?E.center:-1,E.left>=0?E.left:-1,E.vertical||-1,P,U,R,j,q,G,J,u,C,B,I,0,c,M);}(t,l,u,r,n,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,d,x,A,s,v,b,k,h,e,a,o);};if("line"===S)for(var C=0,B=function(t,e,r,n,a){for(var o=[],s=0;s<t.length;s++)for(var u=t[s],l=void 0,p=0;p<u.length-1;p++){var c=u[p],h=u[p+1];c.x<e&&h.x<e||(c.x<e?c=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round():h.x<e&&(h=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round()),c.y<r&&h.y<r||(c.y<r?c=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round():h.y<r&&(h=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round()),c.x>=n&&h.x>=n||(c.x>=n?c=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round():h.x>=n&&(h=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round()),c.y>=a&&h.y>=a||(c.y>=a?c=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round():h.y>=a&&(h=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round()),l&&c.equals(l[l.length-1])||(l=[c],o.push(l)),l.push(h)))));}return o}(e.geometry,0,0,aa,aa);C<B.length;C+=1)for(var E=B[C],P=rl(E,g,_,r.vertical||f,n,24,m,t.overscaling,aa),M=0,T=P;M<T.length;M+=1){var V=T[M],F=f;F&&bl(t,F.text,z,V)||I(E,V);}else if("line-center"===S)for(var O=0,L=e.geometry;O<L.length;O+=1){var D=L[O];if(D.length>1){var U=el(D,_,r.vertical||f,n,24,m);U&&I(D,U);}}else if("Polygon"===e.type)for(var R=0,j=bo(e.geometry,0);R<j.length;R+=1){var q=j[R],N=ol(q,16);I(q[0],new As(N.x,N.y,0));}else if("LineString"===e.type)for(var K=0,X=e.geometry;K<X.length;K+=1){var Z=X[K];I(Z,new As(Z[0].x,Z[0].y,0));}else if("Point"===e.type)for(var G=0,J=e.geometry;G<J.length;G+=1)for(var H=J[G],Y=0,$=H;Y<$.length;Y+=1){var W=$[Y];I([W],new As(W.x,W.y,0));}}(t,o,c,F,l,p,f);},_=0,A=t.features;_<A.length;_+=1)b();o&&t.generateCollisionDebugBuffers();},t.perspective=function(t,e,r,n,i){var a,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(a=1/(n-i),t[10]=(i+n)*a,t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){for(var r={},n=0;n<e.length;n++){var i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=Vn,t.polygonIntersectsPolygon=ca,t.postMapLoadEvent=et,t.postTurnstileEvent=Q,t.potpack=Zs,t.rasterBoundsAttributes=qu,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=gn,t.registerForPluginAvailability=function(t){return Pn?t({pluginURL:Pn,completionCallback:Bn}):Tn.once("pluginAvailable",t),t},t.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*s,t[1]=i*u+o*s,t[2]=n*-s+a*u,t[3]=i*-s+o*u,t},t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],o=e[5],s=e[6],u=e[7],l=e[8],p=e[9],c=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+l*n,t[5]=o*i+p*n,t[6]=s*i+c*n,t[7]=u*i+h*n,t[8]=l*i-a*n,t[9]=p*i-o*n,t[10]=c*i-s*n,t[11]=h*i-u*n,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],u=e[3],l=e[4],p=e[5],c=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+l*n,t[1]=o*i+p*n,t[2]=s*i+c*n,t[3]=u*i+h*n,t[4]=l*i-a*n,t[5]=p*i-o*n,t[6]=c*i-s*n,t[7]=h*i-u*n,t},t.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.setCacheLimits=function(t,e){nt=t,it=e;},t.setRTLTextPlugin=function(t,e){if(En)throw new Error("setRTLTextPlugin cannot be called multiple times.");En=!0,Pn=V.resolveURL(t),Bn=function(t){t?(En=!1,Pn=null,e&&e(t)):Mn=!0;},Tn.fire(new At("pluginAvailable",{pluginURL:Pn,completionCallback:Bn}));},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],n=t[2];return r+=90,r*=Math.PI/180,n*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(n),y:e*Math.sin(r)*Math.sin(n),z:e*Math.cos(n)}},t.styleSpec=zt,t.symbolSize=Cs,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},t.transformMat4=Ea,t.translate=function(t,e,r){var n,i,a,o,s,u,l,p,c,h,f,y,d=r[0],m=r[1],v=r[2];return e===t?(t[12]=e[0]*d+e[4]*m+e[8]*v+e[12],t[13]=e[1]*d+e[5]*m+e[9]*v+e[13],t[14]=e[2]*d+e[6]*m+e[10]*v+e[14],t[15]=e[3]*d+e[7]*m+e[11]*v+e[15]):(n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l,t[7]=p,t[8]=c,t[9]=h,t[10]=f,t[11]=y,t[12]=n*d+s*m+c*v+e[12],t[13]=i*d+u*m+h*v+e[13],t[14]=a*d+l*m+f*v+e[14],t[15]=o*d+p*m+y*v+e[15]),t},t.uniqueId=f,t.validateCustomStyleLayer=function(t){var e=[],r=t.id;return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=ln,t.validateStyle=un,t.values=function(t){var e=[];for(var r in t)e.push(t[r]);return e},t.vectorTile=Lo,t.version="1.3.0",t.warnOnce=w,t.webpSupported=O,t.window=self,t.wrap=p;});

define(["./shared"],function(e){"use strict";function t(e){var r=typeof e;if("number"===r||"boolean"===r||"string"===r||null==e)return JSON.stringify(e);if(Array.isArray(e)){for(var o="[",i=0,n=e;i<n.length;i+=1){o+=t(n[i])+",";}return o+"]"}for(var a=Object.keys(e).sort(),s="{",u=0;u<a.length;u++)s+=JSON.stringify(a[u])+":"+t(e[a[u]])+",";return s+"}"}function r(r){for(var o="",i=0,n=e.refProperties;i<n.length;i+=1){o+="/"+t(r[n[i]]);}return o}var o=function(e){this.keyCache={},e&&this.replace(e);};o.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[]);},o.prototype.update=function(t,o){for(var i=this,n=0,a=t;n<a.length;n+=1){var s=a[n];this._layerConfigs[s.id]=s;var u=this._layers[s.id]=e.createStyleLayer(s);u._featureFilter=e.featureFilter(u.filter),this.keyCache[s.id]&&delete this.keyCache[s.id];}for(var l=0,h=o;l<h.length;l+=1){var c=h[l];delete this.keyCache[c],delete this._layerConfigs[c],delete this._layers[c];}this.familiesBySource={};for(var p=0,f=function(e,t){for(var o={},i=0;i<e.length;i++){var n=t&&t[e[i].id]||r(e[i]);t&&(t[e[i].id]=n);var a=o[n];a||(a=o[n]=[]),a.push(e[i]);}var s=[];for(var u in o)s.push(o[u]);return s}(e.values(this._layerConfigs),this.keyCache);p<f.length;p+=1){var d=f[p].map(function(e){return i._layers[e.id]}),g=d[0];if("none"!==g.visibility){var m=g.source||"",v=this.familiesBySource[m];v||(v=this.familiesBySource[m]={});var y=g.sourceLayer||"_geojsonTileLayer",x=v[y];x||(x=v[y]=[]),x.push(d);}}};var i=function(t){var r={},o=[];for(var i in t){var n=t[i],a=r[i]={};for(var s in n){var u=n[+s];if(u&&0!==u.bitmap.width&&0!==u.bitmap.height){var l={x:0,y:0,w:u.bitmap.width+2,h:u.bitmap.height+2};o.push(l),a[s]={rect:l,metrics:u.metrics};}}}var h=e.potpack(o),c=h.w,p=h.h,f=new e.AlphaImage({width:c||1,height:p||1});for(var d in t){var g=t[d];for(var m in g){var v=g[+m];if(v&&0!==v.bitmap.width&&0!==v.bitmap.height){var y=r[d][m].rect;e.AlphaImage.copy(v.bitmap,f,{x:0,y:0},{x:y.x+1,y:y.y+1},v.bitmap);}}}this.image=f,this.positions=r;};e.register("GlyphAtlas",i);var n=function(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies;};function a(t,r){for(var o=new e.EvaluationParameters(r),i=0,n=t;i<n.length;i+=1){n[i].recalculate(o);}}n.prototype.parse=function(t,r,o,n){var s=this;this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;var u=new e.DictionaryCoder(Object.keys(t.layers).sort()),l=new e.FeatureIndex(this.tileID);l.bucketLayerIDs=[];var h,c,p,f,d={},g={featureIndex:l,iconDependencies:{},patternDependencies:{},glyphDependencies:{}},m=r.familiesBySource[this.source];for(var v in m){var y=t.layers[v];if(y){1===y.version&&e.warnOnce('Vector tile source "'+this.source+'" layer "'+v+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var x=u.encode(v),w=[],S=0;S<y.length;S++){var M=y.feature(S);w.push({feature:M,index:S,sourceLayerIndex:x});}for(var k=0,b=m[v];k<b.length;k+=1){var _=b[k],P=_[0];if(!(P.minzoom&&this.zoom<Math.floor(P.minzoom)))if(!(P.maxzoom&&this.zoom>=P.maxzoom))if("none"!==P.visibility)a(_,this.zoom),(d[P.id]=P.createBucket({index:l.bucketLayerIDs.length,layers:_,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:x,sourceID:this.source})).populate(w,g),l.bucketLayerIDs.push(_.map(function(e){return e.id}));}}}var I=e.mapObject(g.glyphDependencies,function(e){return Object.keys(e).map(Number)});Object.keys(I).length?o.send("getGlyphs",{uid:this.uid,stacks:I},function(e,t){h||(h=e,c=t,D.call(s));}):c={};var T=Object.keys(g.iconDependencies);T.length?o.send("getImages",{icons:T},function(e,t){h||(h=e,p=t,D.call(s));}):p={};var L=Object.keys(g.patternDependencies);function D(){if(h)return n(h);if(c&&p&&f){var t=new i(c),r=new e.ImageAtlas(p,f);for(var o in d){var s=d[o];s instanceof e.SymbolBucket?(a(s.layers,this.zoom),e.performSymbolLayout(s,c,t.positions,p,r.iconPositions,this.showCollisionBoxes)):s.hasPattern&&(s instanceof e.LineBucket||s instanceof e.FillBucket||s instanceof e.FillExtrusionBucket)&&(a(s.layers,this.zoom),s.addFeatures(g,r.patternPositions));}this.status="done",n(null,{buckets:e.values(d).filter(function(e){return !e.isEmpty()}),featureIndex:l,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:r,glyphMap:this.returnDependencies?c:null,iconMap:this.returnDependencies?p:null,glyphPositions:this.returnDependencies?t.positions:null});}}L.length?o.send("getImages",{icons:L},function(e,t){h||(h=e,f=t,D.call(s));}):f={},D.call(this);};var s="undefined"!=typeof performance,u={getEntriesByName:function(e){return !!(s&&performance&&performance.getEntriesByName)&&performance.getEntriesByName(e)},mark:function(e){return !!(s&&performance&&performance.mark)&&performance.mark(e)},measure:function(e,t,r){return !!(s&&performance&&performance.measure)&&performance.measure(e,t,r)},clearMarks:function(e){return !!(s&&performance&&performance.clearMarks)&&performance.clearMarks(e)},clearMeasures:function(e){return !!(s&&performance&&performance.clearMeasures)&&performance.clearMeasures(e)}},l=function(e){this._marks={start:[e.url,"start"].join("#"),end:[e.url,"end"].join("#"),measure:e.url.toString()},u.mark(this._marks.start);};function h(t,r){var o=e.getArrayBuffer(t.request,function(t,o,i,n){t?r(t):o&&r(null,{vectorTile:new e.vectorTile.VectorTile(new e.pbf(o)),rawData:o,cacheControl:i,expires:n});});return function(){o.cancel(),r();}}l.prototype.finish=function(){u.mark(this._marks.end);var e=u.getEntriesByName(this._marks.measure);return 0===e.length&&(u.measure(this._marks.measure,this._marks.start,this._marks.end),e=u.getEntriesByName(this._marks.measure),u.clearMarks(this._marks.start),u.clearMarks(this._marks.end),u.clearMeasures(this._marks.measure)),e},u.Performance=l;var c=function(e,t,r){this.actor=e,this.layerIndex=t,this.loadVectorData=r||h,this.loading={},this.loaded={};};c.prototype.loadTile=function(t,r){var o=this,i=t.uid;this.loading||(this.loading={});var a=!!(t&&t.request&&t.request.collectResourceTiming)&&new u.Performance(t.request),s=this.loading[i]=new n(t);s.abort=this.loadVectorData(t,function(t,n){if(delete o.loading[i],t||!n)return s.status="done",o.loaded[i]=s,r(t);var u=n.rawData,l={};n.expires&&(l.expires=n.expires),n.cacheControl&&(l.cacheControl=n.cacheControl);var h={};if(a){var c=a.finish();c&&(h.resourceTiming=JSON.parse(JSON.stringify(c)));}s.vectorTile=n.vectorTile,s.parse(n.vectorTile,o.layerIndex,o.actor,function(t,o){if(t||!o)return r(t);r(null,e.extend({rawTileData:u.slice(0)},o,l,h));}),o.loaded=o.loaded||{},o.loaded[i]=s;});},c.prototype.reloadTile=function(e,t){var r=this.loaded,o=e.uid,i=this;if(r&&r[o]){var n=r[o];n.showCollisionBoxes=e.showCollisionBoxes;var a=function(e,r){var o=n.reloadCallback;o&&(delete n.reloadCallback,n.parse(n.vectorTile,i.layerIndex,i.actor,o)),t(e,r);};"parsing"===n.status?n.reloadCallback=a:"done"===n.status&&(n.vectorTile?n.parse(n.vectorTile,this.layerIndex,this.actor,a):a());}},c.prototype.abortTile=function(e,t){var r=this.loading,o=e.uid;r&&r[o]&&r[o].abort&&(r[o].abort(),delete r[o]),t();},c.prototype.removeTile=function(e,t){var r=this.loaded,o=e.uid;r&&r[o]&&delete r[o],t();};var p=function(){this.loaded={};};p.prototype.loadTile=function(t,r){var o=t.uid,i=t.encoding,n=t.rawImageData,a=new e.DEMData(o,n,i);this.loaded=this.loaded||{},this.loaded[o]=a,r(null,a);},p.prototype.removeTile=function(e){var t=this.loaded,r=e.uid;t&&t[r]&&delete t[r];};var f={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142};function d(e){var t=0;if(e&&e.length>0){t+=Math.abs(g(e[0]));for(var r=1;r<e.length;r++)t-=Math.abs(g(e[r]));}return t}function g(e){var t,r,o,i,n,a,s=0,u=e.length;if(u>2){for(a=0;a<u;a++)a===u-2?(o=u-2,i=u-1,n=0):a===u-1?(o=u-1,i=0,n=1):(o=a,i=a+1,n=a+2),t=e[o],r=e[i],s+=(m(e[n][0])-m(t[0]))*Math.sin(m(r[1]));s=s*f.RADIUS*f.RADIUS/2;}return s}function m(e){return e*Math.PI/180}var v={geometry:function e(t){var r,o=0;switch(t.type){case"Polygon":return d(t.coordinates);case"MultiPolygon":for(r=0;r<t.coordinates.length;r++)o+=d(t.coordinates[r]);return o;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(r=0;r<t.geometries.length;r++)o+=e(t.geometries[r]);return o}},ring:g},y=function e(t,r){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.map(x(e,r)),t;case"GeometryCollection":return t.geometries=t.geometries.map(x(e,r)),t;case"Feature":return t.geometry=e(t.geometry,r),t;case"Polygon":case"MultiPolygon":return function(e,t){"Polygon"===e.type?e.coordinates=w(e.coordinates,t):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(x(w,t)));return e}(t,r);default:return t}};function x(e,t){return function(r){return e(r,t)}}function w(e,t){t=!!t,e[0]=S(e[0],t);for(var r=1;r<e.length;r++)e[r]=S(e[r],!t);return e}function S(e,t){return function(e){return v.ring(e)>=0}(e)===t?e:e.reverse()}var M=e.vectorTile.VectorTileFeature.prototype.toGeoJSON,k=function(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));};k.prototype.loadGeometry=function(){if(1===this._feature.type){for(var t=[],r=0,o=this._feature.geometry;r<o.length;r+=1){var i=o[r];t.push([new e.Point$1(i[0],i[1])]);}return t}for(var n=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var u=[],l=0,h=s[a];l<h.length;l+=1){var c=h[l];u.push(new e.Point$1(c[0],c[1]));}n.push(u);}return n},k.prototype.toGeoJSON=function(e,t,r){return M.call(this,e,t,r)};var b=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;};b.prototype.feature=function(e){return new k(this._features[e])};var _=e.vectorTile.VectorTileFeature,P=I;function I(e,t){this.options=t||{},this.features=e,this.length=e.length;}function T(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}I.prototype.feature=function(e){return new T(this.features[e],this.options.extent)},T.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var o=t[r],i=[],n=0;n<o.length;n++)i.push(new e.Point$1(o[n][0],o[n][1]));this.geometry.push(i);}return this.geometry},T.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,o=1/0,i=-1/0,n=0;n<e.length;n++)for(var a=e[n],s=0;s<a.length;s++){var u=a[s];t=Math.min(t,u.x),r=Math.max(r,u.x),o=Math.min(o,u.y),i=Math.max(i,u.y);}return [t,o,r,i]},T.prototype.toGeoJSON=_.prototype.toGeoJSON;var L=O,D=O,C=function(e,t){t=t||{};var r={};for(var o in e)r[o]=new P(e[o].features,t),r[o].name=o,r[o].version=t.version,r[o].extent=t.extent;return O({layers:r})},z=P;function O(t){var r=new e.pbf;return function(e,t){for(var r in e.layers)t.writeMessage(3,E,e.layers[r]);}(t,r),r.finish()}function E(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var o={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)o.feature=e.feature(r),t.writeMessage(2,N,o);var i=o.keys;for(r=0;r<i.length;r++)t.writeStringField(3,i[r]);var n=o.values;for(r=0;r<n.length;r++)t.writeMessage(4,G,n[r]);}function N(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,F,e),t.writeVarintField(3,r.type),t.writeMessage(4,J,r);}function F(e,t){var r=e.feature,o=e.keys,i=e.values,n=e.keycache,a=e.valuecache;for(var s in r.properties){var u=n[s];void 0===u&&(o.push(s),u=o.length-1,n[s]=u),t.writeVarint(u);var l=r.properties[s],h=typeof l;"string"!==h&&"boolean"!==h&&"number"!==h&&(l=JSON.stringify(l));var c=h+":"+l,p=a[c];void 0===p&&(i.push(l),p=i.length-1,a[c]=p),t.writeVarint(p);}}function A(e,t){return (t<<3)+(7&e)}function B(e){return e<<1^e>>31}function J(e,t){for(var r=e.loadGeometry(),o=e.type,i=0,n=0,a=r.length,s=0;s<a;s++){var u=r[s],l=1;1===o&&(l=u.length),t.writeVarint(A(1,l));for(var h=3===o?u.length-1:u.length,c=0;c<h;c++){1===c&&1!==o&&t.writeVarint(A(2,h-1));var p=u[c].x-i,f=u[c].y-n;t.writeVarint(B(p)),t.writeVarint(B(f)),i+=p,n+=f;}3===o&&t.writeVarint(A(7,1));}}function G(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function Z(e,t,r,o,i,n){if(!(i-o<=r)){var a=o+i>>1;!function e(t,r,o,i,n,a){for(;n>i;){if(n-i>600){var s=n-i+1,u=o-i+1,l=Math.log(s),h=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*h*(s-h)/s)*(u-s/2<0?-1:1),p=Math.max(i,Math.floor(o-u*h/s+c)),f=Math.min(n,Math.floor(o+(s-u)*h/s+c));e(t,r,o,p,f,a);}var d=r[2*o+a],g=i,m=n;for(j(t,r,i,o),r[2*n+a]>d&&j(t,r,i,n);g<m;){for(j(t,r,g,m),g++,m--;r[2*g+a]<d;)g++;for(;r[2*m+a]>d;)m--;}r[2*i+a]===d?j(t,r,i,m):j(t,r,++m,n),m<=o&&(i=m+1),o<=m&&(n=m-1);}}(e,t,a,o,i,n%2),Z(e,t,r,o,a-1,n+1),Z(e,t,r,a+1,i,n+1);}}function j(e,t,r,o){Y(e,r,o),Y(t,2*r,2*o),Y(t,2*r+1,2*o+1);}function Y(e,t,r){var o=e[t];e[t]=e[r],e[r]=o;}function V(e,t,r,o){var i=e-r,n=t-o;return i*i+n*n}L.fromVectorTileJs=D,L.fromGeojsonVt=C,L.GeoJSONWrapper=z;var X=function(e){return e[0]},W=function(e){return e[1]},R=function(e,t,r,o,i){void 0===t&&(t=X),void 0===r&&(r=W),void 0===o&&(o=64),void 0===i&&(i=Float64Array),this.nodeSize=o,this.points=e;for(var n=e.length<65536?Uint16Array:Uint32Array,a=this.ids=new n(e.length),s=this.coords=new i(2*e.length),u=0;u<e.length;u++)a[u]=u,s[2*u]=t(e[u]),s[2*u+1]=r(e[u]);Z(a,s,o,0,a.length-1,0);};R.prototype.range=function(e,t,r,o){return function(e,t,r,o,i,n,a){for(var s,u,l=[0,e.length-1,0],h=[];l.length;){var c=l.pop(),p=l.pop(),f=l.pop();if(p-f<=a)for(var d=f;d<=p;d++)s=t[2*d],u=t[2*d+1],s>=r&&s<=i&&u>=o&&u<=n&&h.push(e[d]);else{var g=Math.floor((f+p)/2);s=t[2*g],u=t[2*g+1],s>=r&&s<=i&&u>=o&&u<=n&&h.push(e[g]);var m=(c+1)%2;(0===c?r<=s:o<=u)&&(l.push(f),l.push(g-1),l.push(m)),(0===c?i>=s:n>=u)&&(l.push(g+1),l.push(p),l.push(m));}}return h}(this.ids,this.coords,e,t,r,o,this.nodeSize)},R.prototype.within=function(e,t,r){return function(e,t,r,o,i,n){for(var a=[0,e.length-1,0],s=[],u=i*i;a.length;){var l=a.pop(),h=a.pop(),c=a.pop();if(h-c<=n)for(var p=c;p<=h;p++)V(t[2*p],t[2*p+1],r,o)<=u&&s.push(e[p]);else{var f=Math.floor((c+h)/2),d=t[2*f],g=t[2*f+1];V(d,g,r,o)<=u&&s.push(e[f]);var m=(l+1)%2;(0===l?r-i<=d:o-i<=g)&&(a.push(c),a.push(f-1),a.push(m)),(0===l?r+i>=d:o+i>=g)&&(a.push(f+1),a.push(h),a.push(m));}}return s}(this.ids,this.coords,e,t,r,this.nodeSize)};var q={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,map:function(e){return e}},U=function(e){this.options=re(Object.create(q),e),this.trees=new Array(this.options.maxZoom+1);};function $(e,t,r,o,i){return {x:e,y:t,zoom:1/0,id:r,parentId:-1,numPoints:o,properties:i}}function H(e,t){var r=e.geometry.coordinates,o=r[0],i=r[1];return {x:ee(o),y:te(i),zoom:1/0,index:t,parentId:-1}}function K(e){return {type:"Feature",id:e.id,properties:Q(e),geometry:{type:"Point",coordinates:[(o=e.x,360*(o-.5)),(t=e.y,r=(180-360*t)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}};var t,r,o;}function Q(e){var t=e.numPoints,r=t>=1e4?Math.round(t/1e3)+"k":t>=1e3?Math.round(t/100)/10+"k":t;return re(re({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:r})}function ee(e){return e/360+.5}function te(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function re(e,t){for(var r in t)e[r]=t[r];return e}function oe(e){return e.x}function ie(e){return e.y}function ne(e,t,r,o,i,n){var a=i-r,s=n-o;if(0!==a||0!==s){var u=((e-r)*a+(t-o)*s)/(a*a+s*s);u>1?(r=i,o=n):u>0&&(r+=a*u,o+=s*u);}return (a=e-r)*a+(s=t-o)*s}function ae(e,t,r,o){var i={id:void 0===e?null:e,type:t,geometry:r,tags:o,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)se(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var o=0;o<t.length;o++)se(e,t[o]);else if("MultiPolygon"===r)for(o=0;o<t.length;o++)for(var i=0;i<t[o].length;i++)se(e,t[o][i]);}(i),i}function se(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function ue(e,t,r,o){if(t.geometry){var i=t.geometry.coordinates,n=t.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],u=t.id;if(r.promoteId?u=t.properties[r.promoteId]:r.generateId&&(u=o||0),"Point"===n)le(i,s);else if("MultiPoint"===n)for(var l=0;l<i.length;l++)le(i[l],s);else if("LineString"===n)he(i,s,a,!1);else if("MultiLineString"===n){if(r.lineMetrics){for(l=0;l<i.length;l++)s=[],he(i[l],s,a,!1),e.push(ae(u,"LineString",s,t.properties));return}ce(i,s,a,!1);}else if("Polygon"===n)ce(i,s,a,!0);else{if("MultiPolygon"!==n){if("GeometryCollection"===n){for(l=0;l<t.geometry.geometries.length;l++)ue(e,{id:u,geometry:t.geometry.geometries[l],properties:t.properties},r,o);return}throw new Error("Input data is not a valid GeoJSON object.")}for(l=0;l<i.length;l++){var h=[];ce(i[l],h,a,!0),s.push(h);}}e.push(ae(u,n,s,t.properties));}}function le(e,t){t.push(pe(e[0])),t.push(fe(e[1])),t.push(0);}function he(e,t,r,o){for(var i,n,a=0,s=0;s<e.length;s++){var u=pe(e[s][0]),l=fe(e[s][1]);t.push(u),t.push(l),t.push(0),s>0&&(a+=o?(i*l-u*n)/2:Math.sqrt(Math.pow(u-i,2)+Math.pow(l-n,2))),i=u,n=l;}var h=t.length-3;t[2]=1,function e(t,r,o,i){for(var n,a=i,s=o-r>>1,u=o-r,l=t[r],h=t[r+1],c=t[o],p=t[o+1],f=r+3;f<o;f+=3){var d=ne(t[f],t[f+1],l,h,c,p);if(d>a)n=f,a=d;else if(d===a){var g=Math.abs(f-s);g<u&&(n=f,u=g);}}a>i&&(n-r>3&&e(t,r,n,i),t[n+2]=a,o-n>3&&e(t,n,o,i));}(t,0,h,r),t[h+2]=1,t.size=Math.abs(a),t.start=0,t.end=t.size;}function ce(e,t,r,o){for(var i=0;i<e.length;i++){var n=[];he(e[i],n,r,o),t.push(n);}}function pe(e){return e/360+.5}function fe(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function de(e,t,r,o,i,n,a,s){if(o/=t,n>=(r/=t)&&a<o)return e;if(a<r||n>=o)return null;for(var u=[],l=0;l<e.length;l++){var h=e[l],c=h.geometry,p=h.type,f=0===i?h.minX:h.minY,d=0===i?h.maxX:h.maxY;if(f>=r&&d<o)u.push(h);else if(!(d<r||f>=o)){var g=[];if("Point"===p||"MultiPoint"===p)ge(c,g,r,o,i);else if("LineString"===p)me(c,g,r,o,i,!1,s.lineMetrics);else if("MultiLineString"===p)ye(c,g,r,o,i,!1);else if("Polygon"===p)ye(c,g,r,o,i,!0);else if("MultiPolygon"===p)for(var m=0;m<c.length;m++){var v=[];ye(c[m],v,r,o,i,!0),v.length&&g.push(v);}if(g.length){if(s.lineMetrics&&"LineString"===p){for(m=0;m<g.length;m++)u.push(ae(h.id,p,g[m],h.tags));continue}"LineString"!==p&&"MultiLineString"!==p||(1===g.length?(p="LineString",g=g[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===g.length?"Point":"MultiPoint"),u.push(ae(h.id,p,g,h.tags));}}}return u.length?u:null}function ge(e,t,r,o,i){for(var n=0;n<e.length;n+=3){var a=e[n+i];a>=r&&a<=o&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function me(e,t,r,o,i,n,a){for(var s,u,l=ve(e),h=0===i?we:Se,c=e.start,p=0;p<e.length-3;p+=3){var f=e[p],d=e[p+1],g=e[p+2],m=e[p+3],v=e[p+4],y=0===i?f:d,x=0===i?m:v,w=!1;a&&(s=Math.sqrt(Math.pow(f-m,2)+Math.pow(d-v,2))),y<r?x>r&&(u=h(l,f,d,m,v,r),a&&(l.start=c+s*u)):y>o?x<o&&(u=h(l,f,d,m,v,o),a&&(l.start=c+s*u)):xe(l,f,d,g),x<r&&y>=r&&(u=h(l,f,d,m,v,r),w=!0),x>o&&y<=o&&(u=h(l,f,d,m,v,o),w=!0),!n&&w&&(a&&(l.end=c+s*u),t.push(l),l=ve(e)),a&&(c+=s);}var S=e.length-3;f=e[S],d=e[S+1],g=e[S+2],(y=0===i?f:d)>=r&&y<=o&&xe(l,f,d,g),S=l.length-3,n&&S>=3&&(l[S]!==l[0]||l[S+1]!==l[1])&&xe(l,l[0],l[1],l[2]),l.length&&t.push(l);}function ve(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function ye(e,t,r,o,i,n){for(var a=0;a<e.length;a++)me(e[a],t,r,o,i,n,!1);}function xe(e,t,r,o){e.push(t),e.push(r),e.push(o);}function we(e,t,r,o,i,n){var a=(n-t)/(o-t);return e.push(n),e.push(r+(i-r)*a),e.push(1),a}function Se(e,t,r,o,i,n){var a=(n-r)/(i-r);return e.push(t+(o-t)*a),e.push(n),e.push(1),a}function Me(e,t){for(var r=[],o=0;o<e.length;o++){var i,n=e[o],a=n.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)i=ke(n.geometry,t);else if("MultiLineString"===a||"Polygon"===a){i=[];for(var s=0;s<n.geometry.length;s++)i.push(ke(n.geometry[s],t));}else if("MultiPolygon"===a)for(i=[],s=0;s<n.geometry.length;s++){for(var u=[],l=0;l<n.geometry[s].length;l++)u.push(ke(n.geometry[s][l],t));i.push(u);}r.push(ae(n.id,a,i,n.tags));}return r}function ke(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var o=0;o<e.length;o+=3)r.push(e[o]+t,e[o+1],e[o+2]);return r}function be(e,t){if(e.transformed)return e;var r,o,i,n=1<<e.z,a=e.x,s=e.y;for(r=0;r<e.features.length;r++){var u=e.features[r],l=u.geometry,h=u.type;if(u.geometry=[],1===h)for(o=0;o<l.length;o+=2)u.geometry.push(_e(l[o],l[o+1],t,n,a,s));else for(o=0;o<l.length;o++){var c=[];for(i=0;i<l[o].length;i+=2)c.push(_e(l[o][i],l[o][i+1],t,n,a,s));u.geometry.push(c);}}return e.transformed=!0,e}function _e(e,t,r,o,i,n){return [Math.round(r*(e*o-i)),Math.round(r*(t*o-n))]}function Pe(e,t,r,o,i){for(var n=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:o,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,Ie(a,e[s],n,i);var u=e[s].minX,l=e[s].minY,h=e[s].maxX,c=e[s].maxY;u<a.minX&&(a.minX=u),l<a.minY&&(a.minY=l),h>a.maxX&&(a.maxX=h),c>a.maxY&&(a.maxY=c);}return a}function Ie(e,t,r,o){var i=t.geometry,n=t.type,a=[];if("Point"===n||"MultiPoint"===n)for(var s=0;s<i.length;s+=3)a.push(i[s]),a.push(i[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)Te(a,i,e,r,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(s=0;s<i.length;s++)Te(a,i[s],e,r,"Polygon"===n,0===s);else if("MultiPolygon"===n)for(var u=0;u<i.length;u++){var l=i[u];for(s=0;s<l.length;s++)Te(a,l[s],e,r,!0,0===s);}if(a.length){var h=t.tags||null;if("LineString"===n&&o.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=i.start/i.size,h.mapbox_clip_end=i.end/i.size;}var p={geometry:a,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:h};null!==t.id&&(p.id=t.id),e.features.push(p);}}function Te(e,t,r,o,i,n){var a=o*o;if(o>0&&t.size<(i?a:o))r.numPoints+=t.length/3;else{for(var s=[],u=0;u<t.length;u+=3)(0===o||t[u+2]>a)&&(r.numSimplified++,s.push(t[u]),s.push(t[u+1])),r.numPoints++;i&&function(e,t){for(var r=0,o=0,i=e.length,n=i-2;o<i;n=o,o+=2)r+=(e[o]-e[n])*(e[o+1]+e[n+1]);if(r>0===t)for(o=0,i=e.length;o<i/2;o+=2){var a=e[o],s=e[o+1];e[o]=e[i-2-o],e[o+1]=e[i-1-o],e[i-2-o]=a,e[i-1-o]=s;}}(s,n),e.push(s);}}function Le(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var o=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)ue(r,e.features[o],t,o);else"Feature"===e.type?ue(r,e,t):ue(r,{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(o=function(e,t){var r=t.buffer/t.extent,o=e,i=de(e,1,-1-r,r,0,-1,2,t),n=de(e,1,1-r,2+r,0,-1,2,t);return (i||n)&&(o=de(e,1,-r,1+r,0,-1,2,t)||[],i&&(o=Me(i,1).concat(o)),n&&(o=o.concat(Me(n,-1)))),o}(o,t)).length&&this.splitTile(o,0,0,0),r&&(o.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function De(e,t,r){return 32*((1<<e)*r+t)+e}function Ce(e,t){var r=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);var o=this._geoJSONIndex.getTile(r.z,r.x,r.y);if(!o)return t(null,null);var i=new b(o.features),n=L(i);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),t(null,{vectorTile:i,rawData:n.buffer});}U.prototype.load=function(e){var t=this.options,r=t.log,o=t.minZoom,i=t.maxZoom,n=t.nodeSize;r&&console.time("total time");var a="prepare "+e.length+" points";r&&console.time(a),this.points=e;for(var s=[],u=0;u<e.length;u++)e[u].geometry&&s.push(H(e[u],u));this.trees[i+1]=new R(s,oe,ie,n,Float32Array),r&&console.timeEnd(a);for(var l=i;l>=o;l--){var h=+Date.now();s=this._cluster(s,l),this.trees[l]=new R(s,oe,ie,n,Float32Array),r&&console.log("z%d: %d clusters in %dms",l,s.length,+Date.now()-h);}return r&&console.timeEnd("total time"),this},U.prototype.getClusters=function(e,t){var r=((e[0]+180)%360+360)%360-180,o=Math.max(-90,Math.min(90,e[1])),i=180===e[2]?180:((e[2]+180)%360+360)%360-180,n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,i=180;else if(r>i){var a=this.getClusters([r,o,180,n],t),s=this.getClusters([-180,o,i,n],t);return a.concat(s)}for(var u=this.trees[this._limitZoom(t)],l=[],h=0,c=u.range(ee(r),te(n),ee(i),te(o));h<c.length;h+=1){var p=c[h],f=u.points[p];l.push(f.numPoints?K(f):this.points[f.index]);}return l},U.prototype.getChildren=function(e){var t=e>>5,r=e%32,o="No cluster with the specified id.",i=this.trees[r];if(!i)throw new Error(o);var n=i.points[t];if(!n)throw new Error(o);for(var a=this.options.radius/(this.options.extent*Math.pow(2,r-1)),s=[],u=0,l=i.within(n.x,n.y,a);u<l.length;u+=1){var h=l[u],c=i.points[h];c.parentId===e&&s.push(c.numPoints?K(c):this.points[c.index]);}if(0===s.length)throw new Error(o);return s},U.prototype.getLeaves=function(e,t,r){t=t||10,r=r||0;var o=[];return this._appendLeaves(o,e,t,r,0),o},U.prototype.getTile=function(e,t,r){var o=this.trees[this._limitZoom(e)],i=Math.pow(2,e),n=this.options,a=n.extent,s=n.radius/a,u=(r-s)/i,l=(r+1+s)/i,h={features:[]};return this._addTileFeatures(o.range((t-s)/i,u,(t+1+s)/i,l),o.points,t,r,i,h),0===t&&this._addTileFeatures(o.range(1-s/i,u,1,l),o.points,i,r,i,h),t===i-1&&this._addTileFeatures(o.range(0,u,s/i,l),o.points,-1,r,i,h),h.features.length?h:null},U.prototype.getClusterExpansionZoom=function(e){for(var t=e%32-1;t<=this.options.maxZoom;){var r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t},U.prototype._appendLeaves=function(e,t,r,o,i){for(var n=0,a=this.getChildren(t);n<a.length;n+=1){var s=a[n],u=s.properties;if(u&&u.cluster?i+u.point_count<=o?i+=u.point_count:i=this._appendLeaves(e,u.cluster_id,r,o,i):i<o?i++:e.push(s),e.length===r)break}return i},U.prototype._addTileFeatures=function(e,t,r,o,i,n){for(var a=0,s=e;a<s.length;a+=1){var u=t[s[a]],l={type:1,geometry:[[Math.round(this.options.extent*(u.x*i-r)),Math.round(this.options.extent*(u.y*i-o))]],tags:u.numPoints?Q(u):this.points[u.index].properties},h=u.numPoints?u.id:this.points[u.index].id;void 0!==h&&(l.id=h),n.features.push(l);}},U.prototype._limitZoom=function(e){return Math.max(this.options.minZoom,Math.min(e,this.options.maxZoom+1))},U.prototype._cluster=function(e,t){for(var r=[],o=this.options,i=o.radius,n=o.extent,a=o.reduce,s=i/(n*Math.pow(2,t)),u=0;u<e.length;u++){var l=e[u];if(!(l.zoom<=t)){l.zoom=t;for(var h=this.trees[t+1],c=h.within(l.x,l.y,s),p=l.numPoints||1,f=l.x*p,d=l.y*p,g=a&&p>1?this._map(l,!0):null,m=(u<<5)+(t+1),v=0,y=c;v<y.length;v+=1){var x=y[v],w=h.points[x];if(!(w.zoom<=t)){w.zoom=t;var S=w.numPoints||1;f+=w.x*S,d+=w.y*S,p+=S,w.parentId=m,a&&(g||(g=this._map(l,!0)),a(g,this._map(w)));}}1===p?r.push(l):(l.parentId=m,r.push($(f/p,d/p,m,p,g)));}}return r},U.prototype._map=function(e,t){if(e.numPoints)return t?re({},e.properties):e.properties;var r=this.points[e.index].properties,o=this.options.map(r);return t&&o===r?re({},o):o},Le.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},Le.prototype.splitTile=function(e,t,r,o,i,n,a){for(var s=[e,t,r,o],u=this.options,l=u.debug;s.length;){o=s.pop(),r=s.pop(),t=s.pop(),e=s.pop();var h=1<<t,c=De(t,r,o),p=this.tiles[c];if(!p&&(l>1&&console.time("creation"),p=this.tiles[c]=Pe(e,t,r,o,u),this.tileCoords.push({z:t,x:r,y:o}),l)){l>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,o,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var f="z"+t;this.stats[f]=(this.stats[f]||0)+1,this.total++;}if(p.source=e,i){if(t===u.maxZoom||t===i)continue;var d=1<<i-t;if(r!==Math.floor(n/d)||o!==Math.floor(a/d))continue}else if(t===u.indexMaxZoom||p.numPoints<=u.indexMaxPoints)continue;if(p.source=null,0!==e.length){l>1&&console.time("clipping");var g,m,v,y,x,w,S=.5*u.buffer/u.extent,M=.5-S,k=.5+S,b=1+S;g=m=v=y=null,x=de(e,h,r-S,r+k,0,p.minX,p.maxX,u),w=de(e,h,r+M,r+b,0,p.minX,p.maxX,u),e=null,x&&(g=de(x,h,o-S,o+k,1,p.minY,p.maxY,u),m=de(x,h,o+M,o+b,1,p.minY,p.maxY,u),x=null),w&&(v=de(w,h,o-S,o+k,1,p.minY,p.maxY,u),y=de(w,h,o+M,o+b,1,p.minY,p.maxY,u),w=null),l>1&&console.timeEnd("clipping"),s.push(g||[],t+1,2*r,2*o),s.push(m||[],t+1,2*r,2*o+1),s.push(v||[],t+1,2*r+1,2*o),s.push(y||[],t+1,2*r+1,2*o+1);}}},Le.prototype.getTile=function(e,t,r){var o=this.options,i=o.extent,n=o.debug;if(e<0||e>24)return null;var a=1<<e,s=De(e,t=(t%a+a)%a,r);if(this.tiles[s])return be(this.tiles[s],i);n>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var u,l=e,h=t,c=r;!u&&l>0;)l--,h=Math.floor(h/2),c=Math.floor(c/2),u=this.tiles[De(l,h,c)];return u&&u.source?(n>1&&console.log("found parent tile z%d-%d-%d",l,h,c),n>1&&console.time("drilling down"),this.splitTile(u.source,l,h,c,e,t,r),n>1&&console.timeEnd("drilling down"),this.tiles[s]?be(this.tiles[s],i):null):null};var ze=function(t){function r(e,r,o){t.call(this,e,r,Ce),o&&(this.loadGeoJSON=o);}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.loadData=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=t,this._pendingLoadDataParams=e,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData());},r.prototype._loadData=function(){var t=this;if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,o=this._pendingLoadDataParams;delete this._pendingCallback,delete this._pendingLoadDataParams;var i=!!(o&&o.request&&o.request.collectResourceTiming)&&new u.Performance(o.request);this.loadGeoJSON(o,function(n,a){if(n||!a)return r(n);if("object"!=typeof a)return r(new Error("Input data given to '"+o.source+"' is not a valid GeoJSON object."));y(a,!0);try{t._geoJSONIndex=o.cluster?new U(function(t){var r=t.superclusterOptions,o=t.clusterProperties;if(!o||!r)return r;for(var i={},n={},a={accumulated:null,zoom:0},s={properties:null},u=Object.keys(o),l=0,h=u;l<h.length;l+=1){var c=h[l],p=o[c],f=p[0],d=p[1],g=e.createExpression(d),m=e.createExpression("string"==typeof f?[f,["accumulated"],["get",c]]:f);i[c]=g.value,n[c]=m.value;}return r.map=function(e){s.properties=e;for(var t={},r=0,o=u;r<o.length;r+=1){var n=o[r];t[n]=i[n].evaluate(a,s);}return t},r.reduce=function(e,t){s.properties=t;for(var r=0,o=u;r<o.length;r+=1){var i=o[r];a.accumulated=e[i],e[i]=n[i].evaluate(a,s);}},r}(o)).load(a.features):function(e,t){return new Le(e,t)}(a,o.geojsonVtOptions);}catch(n){return r(n)}t.loaded={};var s={};if(i){var u=i.finish();u&&(s.resourceTiming={},s.resourceTiming[o.source]=JSON.parse(JSON.stringify(u)));}r(null,s);});}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData());},r.prototype.reloadTile=function(e,r){var o=this.loaded,i=e.uid;return o&&o[i]?t.prototype.reloadTile.call(this,e,r):this.loadTile(e,r)},r.prototype.loadGeoJSON=function(t,r){if(t.request)e.getJSON(t.request,r);else{if("string"!=typeof t.data)return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();},r.prototype.getClusterExpansionZoom=function(e,t){t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));},r.prototype.getClusterChildren=function(e,t){t(null,this._geoJSONIndex.getChildren(e.clusterId));},r.prototype.getClusterLeaves=function(e,t){t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));},r}(c);var Oe=function(t){var r=this;this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.workerSourceTypes={vector:c,geojson:ze},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,t){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=function(t){if(e.plugin.isLoaded())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};};return Oe.prototype.setReferrer=function(e,t){this.referrer=t;},Oe.prototype.setLayers=function(e,t,r){this.getLayerIndex(e).replace(t),r();},Oe.prototype.updateLayers=function(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();},Oe.prototype.loadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).loadTile(t,r);},Oe.prototype.loadDEMTile=function(e,t,r){this.getDEMWorkerSource(e,t.source).loadTile(t,r);},Oe.prototype.reloadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).reloadTile(t,r);},Oe.prototype.abortTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);},Oe.prototype.removeTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);},Oe.prototype.removeDEMTile=function(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);},Oe.prototype.removeSource=function(e,t,r){if(this.workerSources[e]&&this.workerSources[e][t.type]&&this.workerSources[e][t.type][t.source]){var o=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==o.removeSource?o.removeSource(t,r):r();}},Oe.prototype.loadWorkerSource=function(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}},Oe.prototype.loadRTLTextPlugin=function(t,r,o){try{e.plugin.isLoaded()||(this.self.importScripts(r),o(e.plugin.isLoaded()?null:new Error("RTL Text Plugin failed to import scripts from "+r)));}catch(e){o(e.toString());}},Oe.prototype.getLayerIndex=function(e){var t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new o),t},Oe.prototype.getWorkerSource=function(e,t,r){var o=this;if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][r]){var i={send:function(t,r,i){o.actor.send(t,r,i,e);}};this.workerSources[e][t][r]=new this.workerSourceTypes[t](i,this.getLayerIndex(e));}return this.workerSources[e][t][r]},Oe.prototype.getDEMWorkerSource=function(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new p),this.demWorkerSources[e][t]},Oe.prototype.enforceCacheSizeLimit=function(t,r){e.enforceCacheSizeLimit(r);},"undefined"!=typeof WorkerGlobalScope&&void 0!==e.window&&e.window instanceof WorkerGlobalScope&&(e.window.worker=new Oe(e.window)),Oe});


//

return mapboxgl;

}));


},{}],77:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))

},{"_process":78}],78:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],79:[function(require,module,exports){
var traverse = module.exports = function (obj) {
    return new Traverse(obj);
};

function Traverse (obj) {
    this.value = obj;
}

Traverse.prototype.get = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            node = undefined;
            break;
        }
        node = node[key];
    }
    return node;
};

Traverse.prototype.has = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            return false;
        }
        node = node[key];
    }
    return true;
};

Traverse.prototype.set = function (ps, value) {
    var node = this.value;
    for (var i = 0; i < ps.length - 1; i ++) {
        var key = ps[i];
        if (!hasOwnProperty.call(node, key)) node[key] = {};
        node = node[key];
    }
    node[ps[i]] = value;
    return value;
};

Traverse.prototype.map = function (cb) {
    return walk(this.value, cb, true);
};

Traverse.prototype.forEach = function (cb) {
    this.value = walk(this.value, cb, false);
    return this.value;
};

Traverse.prototype.reduce = function (cb, init) {
    var skip = arguments.length === 1;
    var acc = skip ? this.value : init;
    this.forEach(function (x) {
        if (!this.isRoot || !skip) {
            acc = cb.call(this, acc, x);
        }
    });
    return acc;
};

Traverse.prototype.paths = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.path); 
    });
    return acc;
};

Traverse.prototype.nodes = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.node);
    });
    return acc;
};

Traverse.prototype.clone = function () {
    var parents = [], nodes = [];
    
    return (function clone (src) {
        for (var i = 0; i < parents.length; i++) {
            if (parents[i] === src) {
                return nodes[i];
            }
        }
        
        if (typeof src === 'object' && src !== null) {
            var dst = copy(src);
            
            parents.push(src);
            nodes.push(dst);
            
            forEach(objectKeys(src), function (key) {
                dst[key] = clone(src[key]);
            });
            
            parents.pop();
            nodes.pop();
            return dst;
        }
        else {
            return src;
        }
    })(this.value);
};

function walk (root, cb, immutable) {
    var path = [];
    var parents = [];
    var alive = true;
    
    return (function walker (node_) {
        var node = immutable ? copy(node_) : node_;
        var modifiers = {};
        
        var keepGoing = true;
        
        var state = {
            node : node,
            node_ : node_,
            path : [].concat(path),
            parent : parents[parents.length - 1],
            parents : parents,
            key : path.slice(-1)[0],
            isRoot : path.length === 0,
            level : path.length,
            circular : null,
            update : function (x, stopHere) {
                if (!state.isRoot) {
                    state.parent.node[state.key] = x;
                }
                state.node = x;
                if (stopHere) keepGoing = false;
            },
            'delete' : function (stopHere) {
                delete state.parent.node[state.key];
                if (stopHere) keepGoing = false;
            },
            remove : function (stopHere) {
                if (isArray(state.parent.node)) {
                    state.parent.node.splice(state.key, 1);
                }
                else {
                    delete state.parent.node[state.key];
                }
                if (stopHere) keepGoing = false;
            },
            keys : null,
            before : function (f) { modifiers.before = f },
            after : function (f) { modifiers.after = f },
            pre : function (f) { modifiers.pre = f },
            post : function (f) { modifiers.post = f },
            stop : function () { alive = false },
            block : function () { keepGoing = false }
        };
        
        if (!alive) return state;
        
        function updateState() {
            if (typeof state.node === 'object' && state.node !== null) {
                if (!state.keys || state.node_ !== state.node) {
                    state.keys = objectKeys(state.node)
                }
                
                state.isLeaf = state.keys.length == 0;
                
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].node_ === node_) {
                        state.circular = parents[i];
                        break;
                    }
                }
            }
            else {
                state.isLeaf = true;
                state.keys = null;
            }
            
            state.notLeaf = !state.isLeaf;
            state.notRoot = !state.isRoot;
        }
        
        updateState();
        
        // use return values to update if defined
        var ret = cb.call(state, state.node);
        if (ret !== undefined && state.update) state.update(ret);
        
        if (modifiers.before) modifiers.before.call(state, state.node);
        
        if (!keepGoing) return state;
        
        if (typeof state.node == 'object'
        && state.node !== null && !state.circular) {
            parents.push(state);
            
            updateState();
            
            forEach(state.keys, function (key, i) {
                path.push(key);
                
                if (modifiers.pre) modifiers.pre.call(state, state.node[key], key);
                
                var child = walker(state.node[key]);
                if (immutable && hasOwnProperty.call(state.node, key)) {
                    state.node[key] = child.node;
                }
                
                child.isLast = i == state.keys.length - 1;
                child.isFirst = i == 0;
                
                if (modifiers.post) modifiers.post.call(state, child);
                
                path.pop();
            });
            parents.pop();
        }
        
        if (modifiers.after) modifiers.after.call(state, state.node);
        
        return state;
    })(root).node;
}

function copy (src) {
    if (typeof src === 'object' && src !== null) {
        var dst;
        
        if (isArray(src)) {
            dst = [];
        }
        else if (isDate(src)) {
            dst = new Date(src.getTime ? src.getTime() : src);
        }
        else if (isRegExp(src)) {
            dst = new RegExp(src);
        }
        else if (isError(src)) {
            dst = { message: src.message };
        }
        else if (isBoolean(src)) {
            dst = new Boolean(src);
        }
        else if (isNumber(src)) {
            dst = new Number(src);
        }
        else if (isString(src)) {
            dst = new String(src);
        }
        else if (Object.create && Object.getPrototypeOf) {
            dst = Object.create(Object.getPrototypeOf(src));
        }
        else if (src.constructor === Object) {
            dst = {};
        }
        else {
            var proto =
                (src.constructor && src.constructor.prototype)
                || src.__proto__
                || {}
            ;
            var T = function () {};
            T.prototype = proto;
            dst = new T;
        }
        
        forEach(objectKeys(src), function (key) {
            dst[key] = src[key];
        });
        return dst;
    }
    else return src;
}

var objectKeys = Object.keys || function keys (obj) {
    var res = [];
    for (var key in obj) res.push(key)
    return res;
};

function toS (obj) { return Object.prototype.toString.call(obj) }
function isDate (obj) { return toS(obj) === '[object Date]' }
function isRegExp (obj) { return toS(obj) === '[object RegExp]' }
function isError (obj) { return toS(obj) === '[object Error]' }
function isBoolean (obj) { return toS(obj) === '[object Boolean]' }
function isNumber (obj) { return toS(obj) === '[object Number]' }
function isString (obj) { return toS(obj) === '[object String]' }

var isArray = Array.isArray || function isArray (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

forEach(objectKeys(Traverse.prototype), function (key) {
    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
});

var hasOwnProperty = Object.hasOwnProperty || function (obj, key) {
    return key in obj;
};

},{}],80:[function(require,module,exports){
module.exports.RADIUS = 6378137;
module.exports.FLATTENING = 1/298.257223563;
module.exports.POLAR_RADIUS = 6356752.3142;

},{}],81:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[1])