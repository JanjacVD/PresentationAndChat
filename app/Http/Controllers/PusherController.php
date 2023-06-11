<?php
namespace App\Http\Controllers;

use Error;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Throwable;

class PusherController extends Controller
{
     /**
     * Authenticates logged-in user in the Pusher JS app
     * For private channels
     */
    public function pusherAuth(Request $request)
    {

        $user = auth()->user();
        $socket_id = $request['socket_id'];
        $channel_name =$request['channel_name'];
        $key = getenv('PUSHER_APP_KEY');
        $secret = getenv('PUSHER_APP_SECRET');
        $app_id = getenv('PUSHER_APP_ID');
        if ($user) {
            
            $pusher = new Pusher($key, $secret, $app_id);
            if(!$pusher){
                abort(400);
            }
            $auth = $pusher->authorizeChannel($channel_name, $socket_id);

            return response($auth, 200);
                
            } else {
                abort(403,'Forbiden');
                echo "Forbidden";
                return;
            }
        }
}