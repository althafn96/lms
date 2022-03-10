<?php

namespace App\Models\Courses;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    public function parent(): BelongsTo
    {
        return $this->belongsTo(self::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->name);

            if ($item->icon != null) {
                $item->icon = $item->icon->store('categories/icons');
            } else {
                if ($item->original) {
                    $item->icon = $item->original['icon'];
                }
            }

            if ($item->image != null) {
                $item->image = $item->image->store('categories/images');
            } else {
                if ($item->original) {
                    $item->image = $item->original['image'];
                }
            }
        });
    }

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }

    public function getIconUrl($category)
    {
        if ($category->icon) {
            return Storage::url($category->icon);
        } else {
            return null;
        }
    }

    public function getImageUrl($category)
    {
        if ($category->image) {
            return Storage::url($category->image);
        } else {
            return null;
        }
    }

    public function humanizedCreatedAt($category)
    {
        return $category->created_at == null ? '' : Carbon::parse($category->created_at)->diffForHumans();
    }

    public function humanizedUpdatedAt($category)
    {
        return $category->updated_at == null ? '' : Carbon::parse($category->updated_at)->diffForHumans();
    }
}
