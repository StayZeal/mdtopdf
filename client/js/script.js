var app = angular.module("mdtopdf", [
    // 'ngRoute',
    // 'ngSanitize',
    'wiz.markdown'
]);

/*app.controller("controller",[$scope,$http,function ($scope,$http) {

 console.log($scope.resume);
 }]);*/

app.controller("formController", function ($scope, $http) {

    $scope.processForm = function () {
        // $scope.resume = {};
        console.log($scope.resume);
        console.log("execute.......");
        $http({
            method: "post",
            url: "http://localhost:8081/makepdf",
            data: {content: $scope.resume},
            responseType:"arraybuffer"

        }).then(function successCallback(response, status, header, config) {
                 //也可以成功下载pdf
                // var blob = new Blob([response.data], {type: "application/pdf;charset=utf-8"});
                var blob = new Blob([response.data], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "lll.pdf");
                // $scope.downloadLink = data;
                // console.log(response.data);
            }, function errorCallback(response) {
                console.log(response)
            }
        );

    }
});

app.controller("resumeCtrl", function ($scope, $http) {
    // $scope.resume = "你是不是饿得慌"
    $http({
        method: "post",
        url: "http://localhost:8081/",
        data: {content: $scope.resume}

    }).then(function successCallback(response) {

        }, function errorCallback(response) {

        }
    );
});


function mdtopdf(docDefinition) {

    var html = document.getElementById("editor-preview");
    console.log(html.innerHTML);
    // pdfMake.createPdf(html).open();
    var docDefinition = {content: 'This is an sample PDF printed with pdfMake'};
    // pdfMake.createPdf(docDefinition).download();
    pdfMake.createPdf(docDefinition).open();

}
function pdf() {

    var doc = new jsPDF();

    doc.fromHTML(document.getElementById("editor-preview"));

    doc.save('two-by-four.pdf')

    /*html2canvas(document.getElementById("editor-preview"),{
     onrendered:function (canvas) {
     var imgData = canvas.toDataURL("image/png");
     var doc = new jsPDF();
     var width = doc.internal.pageSize.width;
     var height = doc.internal.pageSize.height;

     console.log("width:"+canvas.width+" height:"+canvas.height);
     doc.addImage(imgData,'PNG',0,0,width-10,height-20);
     // doc.addImage(imgData,'PNG',15,15,canvas.width,canvas.height);
     doc.save("resume.pdf")


     }
     })*/
}



