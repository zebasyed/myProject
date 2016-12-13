/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	submitlogin:function(req,res){
        var user_password = req.param('pass');
        var email = req.param('email');
        sails.log.debug('pass' , +user_password , 'email' , +email);
        var employee = {user_password : user_password, email : email};
        //var sqlQuery = 'SELECT * FROM user';
        sails.log.debug('to go to db', JSON.stringify(employee));
        User.query("SELECT count(*) FROM user WHERE email = 'alan@gmail.com' and user_password = '123123'", function(err, results) {
            sails.log.info("It is inside");
            if (err) {
                sails.log.debug("error to login");
                return res.serverError(err);
                }else{
                    return res.json(results.rows);
                    sails.log.debug(results);
                    if (results !== 0 ) {
                        sails.log.info("the count is zero");
                    }
                }
        });
        
    }
};

