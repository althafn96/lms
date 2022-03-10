<?php

namespace App\Models\Courses;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    use HasFactory;

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->title);
        });
    }

    public function humanizedCreatedAt($course)
    {
        return $course->created_at == null ? '' : Carbon::parse($course->created_at)->diffForHumans();
    }

    public function humanizedUpdatedAt($course)
    {
        return $course->updated_at == null ? '' : Carbon::parse($course->updated_at)->diffForHumans();
    }
}
