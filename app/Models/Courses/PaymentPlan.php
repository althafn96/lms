<?php

namespace App\Models\Courses;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentPlan extends Model
{
    use HasFactory;

    public function details(): HasMany
    {
        return $this->hasMany(PaymentPlanDetail::class, 'payment_plan_id', 'id', 'payment_plan_details');
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
