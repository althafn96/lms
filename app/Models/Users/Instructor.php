<?php

namespace App\Models\Users;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Instructor extends Model
{
    use HasFactory;

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Courses\Course::class);
    }

    public function locations(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Locations\Location::class);
    }

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

    public function getDisplayPictureUrl($instructor)
    {
        if ($instructor->display_picture) {
            return Storage::url($instructor->display_picture);
        } else {
            return '/media/avatars/blank.png';
        }
    }

    public function humanizedCreatedAt($instructor)
    {
        return $instructor->created_at == null ? '' : Carbon::parse($instructor->created_at)->diffForHumans();
    }

    public function getFullName($instructor)
    {
        return $instructor->first_name . " " . $instructor->last_name;
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'loggable');
    }
}
