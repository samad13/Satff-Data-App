

//profile
var profileName =  document.querySelector("h1").textContent

var profileImage = document.querySelector(".img1").src



document.querySelector(".Profile").addEventListener("click",function () {
  //for the staff name
    // if (profileName === profileName){
    //     document.querySelector("h1").textContent = profileName
    // };
    // if (profileImage === profileImage){
    //     document.querySelector(".img1").src = profileImage
    // }

document.querySelector("h1").textContent = profileName

document.querySelector(".img1").src = profileImage
      var tree = document.querySelector(".img3").src = "blank"
   var forw =  document.querySelector(".img2").src = "blank"

   document.querySelector(".img4").src ="blank"

    
});



// Report data

//daily report
var dailyReport ={
        name: "Daily Reports",
        dailyimg1: "images/daily report.jpg",
        

    };
    document.querySelector(".daily").addEventListener("click",function () {

        document.querySelector("h1").textContent = dailyReport.name
        
        document.querySelector(".img1").src = dailyReport.dailyimg1
        document.querySelector(".img2").src = "blank"
        document.querySelector(".img3").src ="blank"
        document.querySelector(".img4").src ="blank"
    
    });
//weekly report
var weeklyReport = {
    name:"Weekly Reports",
    weeklyImg1:"images/weekly_progress_report_with_project_details_and_release_details_Slide01.jpg"
}

document.querySelector(".weekly").addEventListener("click",function () {
        
    document.querySelector("h1").textContent = weeklyReport.name
    document.querySelector(".img2").src = "blank"
    document.querySelector(".img1").src =weeklyReport.weeklyImg1 
    document.querySelector(".img3").src ="blank"
    document.querySelector(".img4").src ="blank"
    
    
});


//monthly report
var monthlyReport ={
   name: "Monthly Reports",
   Monthlyimg1: "images/chart.jpg",
   Monthlyimg2: "images/53b168eb-b875-4eaf-9bff-3084d937fd13.jpeg"
    

}
document.querySelector(".monthly").addEventListener("click",function () {
        
    document.querySelector("h1").textContent =monthlyReport.name
    document.querySelector(".img2").src = monthlyReport.Monthlyimg1
    document.querySelector(".img1").src = monthlyReport.Monthlyimg2
    document.querySelector(".img3").src ="blank"
    document.querySelector(".img4").src ="blank"


});
    

//performance data

var monthlyPerformance = {
    name: "Monthly performance",
    monthltypimg1:"images/Monthly-Performance-Review-791x1024.png" 

}

document.querySelector(".Monthly-p").addEventListener("click",function () {


        
    document.querySelector("h1").textContent = monthlyPerformance.name 
    document.querySelector(".img1").src = monthlyPerformance.monthltypimg1
    document.querySelector(".img2").src = "blank"
    document.querySelector(".img3").src ="blank"
    document.querySelector(".img4").src ="blank"
    
});
var quaterlyPerformance ={
    name: "Quarterly performance",
    Quarterlypimg1:"images/Quarterly-Performance-Review-Template-791x1024.png" 
}
document.querySelector(".Quarterly").addEventListener("click",function handle() {


        
    document.querySelector("h1").textContent = quaterlyPerformance.name 
    document.querySelector(".img1").src = quaterlyPerformance.Quarterlypimg1
    document.querySelector(".img2").src = "blank"
    document.querySelector(".img3").src ="blank"
    document.querySelector(".img4").src ="blank"
    
});



var yearly = {
    name: "Annual performance",
    yearlypimg1:"images/employee_performance_review_template_1.png", 
    yearlypimg2:"images/Slide122.jpg"
}
document.querySelector(".Yearly").addEventListener("click",function () {


        
    document.querySelector("h1").textContent = yearly.name 
    document.querySelector(".img1").src =yearly.yearlypimg2
    document.querySelector(".img2").src =yearly.yearlypimg1
    document.querySelector(".img3").src ="blank"
    document.querySelector(".img4").src ="blank"
    
});


//document 
var sdocument = {

    name: "Documents",
    cv:"images/5224967.jpg", 
    collegeCertificate:"images/nicosia university.jpeg",
    secondaryCertificate:"images/arima-senior-comprehensive-school-certificate-1-638.jpg"
};
document.querySelector(".documents").addEventListener("click",function () {


        
    document.querySelector("h1").textContent = sdocument.name 
    document.querySelector(".img1").src = sdocument.collegeCertificate
    document.querySelector(".img2").src = sdocument.secondaryCertificate
    document.querySelector(".img4").src = sdocument.cv
    document.querySelector(".img3").src ="blank"
    
});


