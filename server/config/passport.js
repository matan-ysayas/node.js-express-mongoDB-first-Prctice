const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const users=require('../Models/user-model');
const SECRET_KEY=process.env.SECRET_KEY;

const options={
    secretOrKey:process.env.SECRET_KEY
};

options.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

const passportFunction=(passport)=>{
    passport.use(
        new jwtStrategy (options,(obj_from_payload, done)=>{
            users.findOne({_id:obj_from_payload._id})
            .then(user=>{
                if(user) done(null,user);
                done(null,false)
            })
            .catch(err=>done(err,false))
        })
    )
}
