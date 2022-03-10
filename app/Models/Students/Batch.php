<?php

namespace App\Models\Students;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Batch extends Model
{
    use HasFactory;

    public function course(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Courses\Course::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Locations\Location::class);
    }

    public static function booted()
    {
        static::saving(function ($item) {
            $item->slug = Str::slug($item->name);
        });
    }

    public function humanizedCreatedAt($batch)
    {
        return $batch->created_at == null ? '' : Carbon::parse($batch->created_at)->diffForHumans();
    }

    public function humanizedUpdatedAt($batch)
    {
        return $batch->updated_at == null ? '' : Carbon::parse($batch->updated_at)->diffForHumans();
    }

    public function humanizedCommencingOn($batch)
    {
        return $batch->commences_on == null ? '' : Carbon::parse($batch->commences_on)->diffForHumans();
    }

    public function humanizedCompletingOn($batch)
    {
        return $batch->completes_on == null ? '' : Carbon::parse($batch->completes_on)->diffForHumans();
    }

    public function humanizedEnrollmentsClosesOn($batch)
    {
        return $batch->enrollments_closes_on == null ? '' : Carbon::parse($batch->enrollments_closes_on)->diffForHumans();
    }

    public function getCommencesOnAttribute($value)
    {
        return $value == null ? '' : Carbon::parse($value)->format('Y-m-d');
    }

    public function getCompletesOnAttribute($value)
    {
        return $value == null ? '' : Carbon::parse($value)->format('Y-m-d');
    }

    public function getEnrollementsClosesOnAttribute($value)
    {
        return $value == null ? '' : Carbon::parse($value)->format('Y-m-d');
    }
}
