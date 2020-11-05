<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
        public function controllerMethod(){
            return response()->json([
                'msg' => 'we are it'
            ]);
        }
        public function test(){
            return response()->json([
                'msg'=>'some error occured'

            ],422);
        }
}
