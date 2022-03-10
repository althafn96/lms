<?php

namespace App\GraphQL\Mutations;

use App\Models\Users\User;
use Illuminate\Support\Facades\Auth;

class Logout
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args): ?User
    {
        $user = auth()->user();

        auth()->guard('web')->logout();

        return $user;
    }
}
