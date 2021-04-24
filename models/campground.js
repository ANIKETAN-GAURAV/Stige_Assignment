var mongoose    =   require("mongoose");

var campgroundSchema = new  mongoose.Schema(
{
    male: Number ,
    female: Number ,
    others: Number ,
    _id: String ,
    // author:{
    //     id:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"User"
    //     },
    //     username:String
    // }, 
    // comments: [
    // {
    //     type: mongoose.Schema.Types.ObjectId ,
        
    //     // ref means reference which refers to name of the model
    //     ref: "Comment"
    // }
    // ]
});

var Campground = mongoose.model("Campground",campgroundSchema);

module.exports = Campground;