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
}
