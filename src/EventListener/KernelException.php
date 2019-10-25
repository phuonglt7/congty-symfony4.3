<?php

namespace App\EventListener;

class KernelException
{
    public function onKernelException()
    {
        //run when error 404 not found
        die("listener");
    }
}