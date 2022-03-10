<?php

namespace App\Models\Courses;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LessonFile extends Model
{
    use HasFactory;

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            if ($item->path != null) {
                $item->path = $item->path->store('courses/lessons');
            } else {
                if ($item->original) {
                    $item->path = $item->original['path'];
                }
            }
        });
    }

    public function getPathUrl($file)
    {
        if ($file->path) {
            return Storage::url($file->path);
        } else {
            return null;
        }
    }
}
