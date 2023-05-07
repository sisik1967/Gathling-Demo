var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "177",
        "ok": "177",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles1": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles2": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles3": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles4": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 177,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.278",
        "ok": "3.278",
        "ko": "-"
    }
},
contents: {
"req_post--api-users-7a661": {
        type: "REQUEST",
        name: "POST /api/users/login",
path: "POST /api/users/login",
pathFormatted: "req_post--api-users-7a661",
stats: {
    "name": "POST /api/users/login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles2": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles4": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.019",
        "ok": "0.019",
        "ko": "-"
    }
}
    },"req_create-and-dele-5c840": {
        type: "REQUEST",
        name: "Create And Delete Article",
path: "Create And Delete Article",
pathFormatted: "req_create-and-dele-5c840",
stats: {
    "name": "Create And Delete Article",
    "numberOfRequests": {
        "total": "176",
        "ok": "176",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles1": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles2": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles3": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles4": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 176,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.259",
        "ok": "3.259",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
