<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','description','address','location_id','email','phone'
    ];
	//Get all jobs from this company
	public function jobs(){
		return $this->hasMany('App\Job');
	}
}
