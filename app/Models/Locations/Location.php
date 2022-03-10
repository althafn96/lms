<?php

namespace App\Models\Locations;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Location extends Model
{
    use HasFactory;

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Courses\Course::class);
    }

    public function instructors(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Users\Instructor::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->name);
        });
    }

    public function humanizedCreatedAt($location)
    {
        return $location->created_at == null ? '' : Carbon::parse($location->created_at)->diffForHumans();
    }

    public function humanizedUpdatedAt($location)
    {
        return $location->updated_at == null ? '' : Carbon::parse($location->updated_at)->diffForHumans();
    }
}
