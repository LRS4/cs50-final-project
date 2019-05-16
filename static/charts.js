$(document).ready(function(){

    // function to render chosen charts
    function renderChart(survived, died, labels, chartid, charttype) {
        var ctx = document.getElementById(chartid).getContext('2d');
        var myChart = new Chart(ctx, {
            type: charttype,
            responsive: true,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Survived',
                    data: survived,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    pointBorderColor: 'white',
                    pointHoverBackgroundColor: 'white',
                },
                {
                    label: 'Died',
                    data: died,
                    borderColor: 'white',
                    backgroundColor: 'orange',
                    pointBorderColor: 'orange',
                    pointHoverBackgroundColor: 'white',
                }]
            },
            options: {
                legend: {
                    labels: {
                            fontColor: 'orange'
                        }
                        },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontColor: 'orange'
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: 'orange'
                        },
                    }]
                }, 
                maintainAspectRatio: false,
                responsive: true,
            }
        });
    }

    // render gender analysis
    let horizontalBar = 'horizontalBar'
    let gender_chart = "gender"
    let gender_survived = [109, 233];
    let gender_died = [468, 109];
    let gender_labels =  ["Male", "Female"];
    renderChart(gender_survived, gender_died, gender_labels, gender_chart, horizontalBar);

    // render passenger class analysis
    let pclass_chart = "pclass"
    let pclass_survived = [136, 87, 119];
    let pclass_died = [80, 97, 372];
    let pclass_labels =  ["Pclass 1", "Pclass2", "Pclass3"];
    renderChart(pclass_survived, pclass_died, pclass_labels, pclass_chart, horizontalBar);

    // render age analysis
    let age_chart = "age"
    let age_survived = [82, 205, 50, 5];
    let age_died = [97, 357, 78, 17];
    let age_labels =  ["0 - 20", "21 - 40", "41 - 60", "61 - 80"];
    renderChart(age_survived, age_died, age_labels, age_chart, 'bar');

    // render family members analysis
    let family_chart = "family"
    let family_survived = [163, 89, 59, 51, 3, 3, 4];
    let family_died = [374, 72, 43, 8, 12, 19, 8];
    let family_labels =  ["1 (Alone)", "2", "3", "4", "5", "6", "7"];
    renderChart(family_survived, family_died, family_labels, family_chart, 'bar');

    // render title analysis
    let title_chart = "title"
    let title_survived = [0, 1, 0, 3, 1, 1, 23, 127, 2, 1, 81, 99, 1, 0, 1, 1];
    let title_died = [1, 1, 1, 4, 0, 1, 17, 55, 0, 0, 436, 26, 0, 6, 0, 0];
    let title_labels =  ["Capt.", "Col.", "Don.", "Dr.", "Lady.", "Major.", "Master.", "Miss.", "Mlle.", "Mme.", "Mr.", "Mrs.", "Ms.", "Rev.", "Sir.", "the."];
    renderChart(title_survived, title_died, title_labels, title_chart, 'line');

    $("#nextThree").click(function() {
        $('#three').css("display", "none");	
        $('#four').css("display", "block");	
    });

    $("#nextFour").click(function() {
        $('#four').css("display", "none");	
        $('#five').css("display", "block");	
    });

    $("#nextFive").click(function() {
        $('#five').css("display", "none");	
        $('#six').css("display", "block");	
    });

    // redirect to beginning
	$("#finalSubmit").click(function() {
		document.location.href = "/";
	});


});