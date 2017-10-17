<?php

namespace App\Http\Controllers\Auth;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;
use App\User;

class AuthController extends Controller
{
	protected $auth;

	public function __construct(JWTAuth $auth)
	{
		$this->auth = $auth;
	}

	public function register(RegisterRequest $request)
	{
		$user = User::create([
			'name'      => $request->name,
			'email'     => $request->email,
			'password'  => bcrypt($request->password),
		]);

		$token = $this->auth->attempt($request->only(['email','password']));
		return response()->json([
			'data'=>$user,
			'meta'=>[
				'token'=>$token
			]
		],200);
	}

	public function login(LoginRequest $request)
	{
		try{
			if(!$token = $this->auth->attempt($request->only('email','password'))){
				return response()->json([
					'errors'=>[
						'root'=>'Sorry we could not find such account!!'
					]
				],401);
			}

		} catch (JWTException $exception){
			return response()->json([
				'data'=>'failed'
			],$exception->getStatusCode());

		}


		return response()->json([
			'data'=>$request->user(),
			'meta'=>[
				'token'=>$token
			]
		],200);
	}


	public function logout()
	{
		$this->auth->invalidate($this->auth->getToken());
		return response(null,200);
	}

	public function getInfo(Request $request)
	{
		return response()->json([
			'data'=>$request->user()
		]);
	}


	public function getTimeLine() {
		dd('here');
	}
}
