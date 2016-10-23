<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','state','state_code','country','country_code','zipcode'
    ];
	//Get all Jobs from Location
	public function jobs(){
		return $this->hasMany('App\Job');
	}
	//Get all Companies
	public function companies(){
		return $this->hasMany('App\Company');
	}
	//Get all Salaries
	public function salaries(){
		return $this->hasMany('App\Salary');
	}
}
