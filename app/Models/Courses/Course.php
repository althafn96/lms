<?php

namespace App\Models\Courses;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    use HasFactory;

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }

    public function faqs(): BelongsToMany
    {
        return $this->belongsToMany(Faq::class);
    }

    public function modules(): HasMany
    {
        return $this->hasMany(Module::class);
    }

    public function paymentPlans(): HasMany
    {
        return $this->hasMany(PaymentPlan::class);
    }

    public function instructors(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Users\Instructor::class);
    }

    public function locations(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\Locations\Location::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->name);

            if ($item->thumbnail != null) {
                $item->thumbnail = $item->thumbnail->store('categories/thumbnails');
            } else {
                if ($item->original) {
                    $item->thumbnail = $item->original['thumbnail'];
                }
            }

            if ($item->cover_img != null) {
                $item->cover_img = $item->cover_img->store('categories/cover_images');
            } else {
                if ($item->original) {
                    $item->cover_img = $item->original['cover_img'];
                }
            }
        });
    }

    public function getThumbnailUrl($course)
    {
        if ($course->thumbnail) {
            return Storage::url($course->thumbnail);
        } else {
            return null;
        }
    }

    public function getCoverImageUrl($course)
    {
        if ($course->cover_img) {
            return Storage::url($course->cover_img);
        } else {
            return null;
        }
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
