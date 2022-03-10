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

class Student extends Model
{
    use HasFactory;

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->first_name . " " . $item->last_name);

            if ($item->display_picture != null) {
                $item->display_picture = $item->display_picture->store('students/display_pictures');
            } else {
                if ($item->original) {
                    $item->display_picture = $item->original['display_picture'];
                }
            }
        });
    }

    public function getDisplayPictureUrl($student)
    {
        if ($student->display_picture) {
            return Storage::url($student->display_picture);
        } else {
            return '/media/avatars/blank.png';
        }
    }

    public function humanizedCreatedAt($student)
    {
        return $student->created_at == null ? '' : Carbon::parse($student->created_at)->diffForHumans();
    }

    public function getFullName($student)
    {
        return $student->first_name . " " . $student->last_name;
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'loggable');
    }
}
