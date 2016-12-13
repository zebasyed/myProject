/**
 * SignupController
 *
 * @description :: Server-side logic for managing signups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	submitSignup:function(req,res){
        //var employee = {user_name: 'abc',user_password:'123123123',email : 'xyz@abc.com',phone_number : '0000010000'};
        var name = req.param('name');
        var pass = req.param('pass');
        var email = req.param('email');
        var phoneNumber = req.param('phoneNumber');
        sails.log.debug('name:', + name , 'pass' , +pass , 'email' , +email, 'phoneNumber' , +phoneNumber);
        var employee = {user_name: name, user_password : pass, email : email, phone_number : phoneNumber};
        sails.log.debug('to go to db', JSON.stringify(employee));
        Signup.create(employee).exec(function(err, result){
            if (err) {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
            sails.log.debug('Success', JSON.stringify(result));
            return res.json(200, { success: 'Success' });
        });
    }
};

