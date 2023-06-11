<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $pass = Hash::make($request->password);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $pass
        ]);
        $token = $user->createToken('bearer')->plainTextToken;
        return response()->json(['user' => $user, 'token' => $token]);
    }
}
