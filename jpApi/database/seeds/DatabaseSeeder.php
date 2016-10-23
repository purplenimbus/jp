<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
		
		$user					=	new User;
		
		$user->fname			=	'Anthony';
		$user->lname			=	'Akpan';
		$user->email			=	'anthony.akpan@hotmail.com';
		$user->sex				=	'M';
		$user->dob				=	'2016-03-09';
		$user->password			=	bcrypt('easier');
		$user->remember_token	=	str_random(10);
		$user->access_level		=	'admin';
		
		$user->save();

    }
	
	private function getJobs(){
		$url	=	"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fjoblistnigeria.com%2F2011-recruitment-for-director-it-strategy-insight-information-technology.html'%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22entry-content%20single-detail%22%5D'&format=json&diagnostics=true&callback=";
	}
}
