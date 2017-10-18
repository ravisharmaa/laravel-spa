<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'AppUsers';

    protected $fillable = [
        'UserName','Password','NoOfAllowedCustomer','ActiveFlag','SalesRepStatus','PasswordChangedDate','SalesRepNo',
	    'SalesRepDepartment','SalesRepName','UserId','isPasswordChanged','SalesRepLanguage','visitLimit',
	    'accessDepartment','salesRepAssistant','UserToken'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'PassWord', 'UserToken',
    ];



    protected $email = 'UserName';
}
