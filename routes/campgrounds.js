var express     =  require('express');
var router      =  express.Router(); 

var Campground  =  require("../models/campground");
var Comment     =  require("../models/comment");
var middleware  =  require("../middleware");

//index --- show all campgrounds
router.get("/campgrounds",function(req,res)
{
    // res.render("campgrounds",{camp:campgrounds});

    Campground.find({},function(err,allCampgrounds)
    {
        if(err)
        console.log("Error");
        else
        res.render("campgrounds/index",{campground: allCampgrounds});
    });
});

// new --- show form to create new campground
router.get("/campgrounds/new", middleware.isLoggedIn, function(req,res)
{
    res.render("campgrounds/new");
});
router.get("/campgrounds/dashboard", middleware.isLoggedIn, function(req,res)
{
    res.render("hello");
    res.end();
});
//create --- add new campground to database
router.post("/campgrounds", middleware.isLoggedIn, function(req,res)
{
    // extracting datas from name attributes since post request
    console.log(req.body);
    console.log("latest");
    var gender=req.body.gender;
    
    console.log(gender);
    // var author = 
    // {
    //     id: req.user._id ,
    //     username: req.user.username
    // }

    var newCampground = 
    { 
        male: 10, 
        female:10,
        others:10, 
        _id: "question"
    }
    Campground.findById("question",function(err,foundCampground)
    {   
        if(err){
            console.log(err);
        }
        
        else
        {  
            var newgender = {};
            newgender["male"] = foundCampground["male"];
            newgender["female"] = foundCampground["female"];
            newgender["others"] = foundCampground["others"];
            newgender["_id"] = foundCampground["_id"];
            newgender[gender]++;
            console.log(newgender);
                Campground.findByIdAndUpdate("question",  newgender, {new: true},
                            function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    res.redirect("/campgrounds");
                    res.end();
                }
            });
    
        }
        //
    });
    // console.log("we reach");
    // Campground.create(newCampground, function(err,newly)
    // {  
    //     console.log(newly);
    //     if(err)
    //     console.log("Error");
    //     else
    //     {
    //         res.send("helloworld");
    //         res.end();
    //     }
    // });
    var user_id = "question";
//     Campground.findByIdAndUpdate(user_id,  newCampground,
//                             function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log(docs);
//         res.send("updated");
//         res.end();
//     }
// });
});


// This must be written after app.get("/campgrounds/new..) otherwsie if we want to 
// open  "/campgrounds/new" we end by opening the "/campgrounds/:id"


module.exports = router;