// Capitol 1049 - autosume actualizate pentru clasificatorul SPEC_2EDU
// Selectorii nu mai depind de ID_MD; randurile sunt identificate dupa RIND.
// Astfel, schimbarea ID-urilor randurilor nu mai necesita modificarea acestui fisier.

var cap1049Spec2EduCodes = [
    "2111.1",
    "2111.2",
    "2111.3",
    "2111.4",
    "2111.5",
    "2111.6",
    "2111.7",
    "2111.102111.5",
    "2111.302111.2",
    "2141.1",
    "2142.1",
    "2143.1",
    "2144.1",
    "2144.2",
    "2144.3",
    "4161.1",
    "4161.2",
    "4161.3",
    "6111.1",
    "6111.2",
    "6111.106111.2",
    "7111.1",
    "7111.2",
    "7131.1",
    "7131.2",
    "7131.3",
    "7131.4",
    "7131.5",
    "7131.107131.3",
    "7131.307131.4",
    "7132.1",
    "7132.2",
    "7132.3",
    "7132.4",
    "7132.5",
    "7132.6",
    "7132.7",
    "7132.8",
    "7132.9",
    "7132.607132.8",
    "7133.1",
    "7133.2",
    "7131.107133.2",
    "7133.3",
    "7141.1",
    "7141.2",
    "7141.3",
    "7141.4",
    "7142.1",
    "7143.1",
    "7143.2",
    "7143.3",
    "7144.1",
    "7144.2",
    "7144.3",
    "7144.4",
    "7151.1",
    "7151.2",
    "7151.3",
    "7151.4",
    "7151.5",
    "7151.6",
    "7151.7",
    "7151.207151.5",
    "7152.1",
    "7153.1",
    "7161.1",
    "7161.2",
    "7161.3",
    "7161.4",
    "7161.207161.4",
    "7161.407161.3",
    "7162.1",
    "7162.2",
    "7211.1",
    "7211.2",
    "7211.3",
    "7211.4",
    "7211.207211.3",
    "7212.1",
    "7212.2",
    "7212.3",
    "7212.4",
    "7212.107212.3",
    "7213.1",
    "7213.2",
    "7214.1",
    "7214.2",
    "7214.3",
    "7214.4",
    "7214.5",
    "7214.6",
    "7215.1",
    "7215.2",
    "7215.3",
    "7221.1",
    "7221.2",
    "7221.3",
    "7221.4",
    "7221.5",
    "7221.6",
    "7221.7",
    "7221.8",
    "7221.9",
    "7221.10",
    "7221.11",
    "7221.1007221.3",
    "7221.1107221.5",
    "7221.207221.9",
    "7222.1",
    "7223.1",
    "7223.2",
    "7224.1",
    "7224.2",
    "7224.3",
    "7231.1",
    "7231.2",
    "7231.3",
    "7231.4",
    "7231.5",
    "7231.6",
    "7231.7",
    "7231.407231.5",
    "7232.1",
    "7232.2",
    "7241.1",
    "7321.1",
    "7321.2",
    "7321.3",
    "7321.4",
    "7321.5",
    "7321.6",
    "7321.7",
    "7321.8",
    "7321.9",
    "7321.10",
    "7321.11",
    "7321.12",
    "7321.13",
    "7321.14",
    "7321.1207321.9",
    "7321.1207321.14",
    "7322.1",
    "7323.1",
    "7323.107323.2",
    "7323.2",
    "7323.3",
    "7323.4",
    "7323.5",
    "7323.6",
    "7323.7",
    "7324.1",
    "7324.2",
    "7324.3",
    "8111.1",
    "8112.1",
    "8112.2",
    "8112.3",
    "8113.1",
    "8114.1",
    "8121.1",
    "8121.2",
    "8121.3",
    "8121.4",
    "8121.308121.4",
    "8122.1",
    "8122.2",
    "8122.3",
    "8211.1",
    "8311.1",
    "9111.1",
    "9211.1",
    "9211.2",
    "9221.1",
    "9221.2",
    "10121.1",
    "10121.2",
    "10121.3",
    "10121.4",
    "10121.5",
    "10121.6",
    "10121.7",
    "10131.1",
    "10131.2",
    "10131.3",
    "10132.1",
    "10132.110131.3",
    "10151.1",
    "10311.1",
    "10311.2",
    "10311.3",
    "10312.1",
    "10312.2",
    "10313.1",
    "10313.2",
    "10313.3",
    "10411.1",
    "10411.2",
    "10411.3",
    "10411.4",
    "10411.5",
    "10411.6",
    "10411.7",
    "10411.8",
    "10411.9",
    "10411.10",
    "10411.11",
    "10411.12",
    "10411.13",
    "10411.14",
    "10411.910411.8",
    "10411.1410411.13",
    "10411.810411.5",
    "10411.710411.6"
];

function cap1049BuildRind(prefix, code) {
    var dotPos = code.indexOf(".");
    var mainCode = dotPos >= 0 ? code.substring(0, dotPos) : code;
    var suffix = dotPos >= 0 ? code.substring(dotPos) : "";

    while (mainCode.length < 5) {
        mainCode = "0" + mainCode;
    }

    return prefix + mainCode + suffix;
}

function cap1049GetInputByRind(rind, col) {
    return $("input[id^='49_1049_'][id$='_" + rind + "_" + col + "']").first();
}

function cap1049ReadInt(rind, col) {
    var $input = cap1049GetInputByRind(rind, col);
    return parseInt($input.val(), 10) || 0;
}

function cap1049SetTotal(totalRind, col, value) {
    var $input = cap1049GetInputByRind(totalRind, col);
    if ($input.length) {
        $input.val(value !== 0 ? value : "").prop("readonly", true);
    }
}

function sumCap1049ByPrefix(prefix, totalRind) {
    var sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    cap1049Spec2EduCodes.forEach(function (code) {
        var rind = cap1049BuildRind(prefix, code);
        for (var col = 1; col <= 12; col++) {
            sums[col - 1] += cap1049ReadInt(rind, col);
        }
    });

    for (var col = 1; col <= 12; col++) {
        cap1049SetTotal(totalRind, col, sums[col - 1]);
    }
}

function sumCap1049_Rind10() {
    sumCap1049ByPrefix("1", "10");
}

function sumCap1049_Rind20() {
    sumCap1049ByPrefix("2", "20");
}

function sumCap1049_Rind30() {
    sumCap1049ByPrefix("3", "30");
}

function sumCap1049_Rind40() {
    // Randurile aferente totalului 40 au prefixul intern 5.
    sumCap1049ByPrefix("5", "40");
}

function f_Capitol_1049() {
    sumCap1049_Rind10();
    sumCap1049_Rind20();
    sumCap1049_Rind30();
    sumCap1049_Rind40();
}

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1049();

    // Un singur handler delegat este suficient si pentru randurile adaugate dinamic.
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1049);
});
