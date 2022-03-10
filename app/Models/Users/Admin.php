<?php

namespace App\Models\Users;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Model
{
    use HasFactory;

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->first_name . " " . $item->last_name);

            if ($item->display_picture != null) {
                $item->display_picture = $item->display_picture->store('instructors/display_pictures');
            } else {
                if ($item->original) {
                    $item->display_picture = $item->original['display_picture'];
                }
            }
        });
    }

    public function getDisplayPictureUrl($admin)
    {
        if ($admin->display_picture) {
            return Storage::url($admin->display_picture);
        } else {
            return '/media/avatars/blank.png';
        }
    }

    public function humanizedCreatedAt($admin)
    {
        return $admin->created_at == null ? '' : Carbon::parse($admin->created_at)->diffForHumans();
    }

    public function getFullName($admin)
    {
        return $admin->first_name . " " . $admin->last_name;
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'loggable');
    }
}
