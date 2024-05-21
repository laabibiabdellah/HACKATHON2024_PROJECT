<?php

namespace App\Http\Controllers;

use App\Models\Entreprise;
use App\Models\Etablissement;
use App\Models\Intervenant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function etablissementRegister(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'region_id' => 'required',
            'nom_efp' => 'required|max:255',
            'adresse' => 'required|max:45',
            'tel' => 'required|max:45',
            'ville' => 'required|max:45',
        ]);

        $hashedPassword = bcrypt($validatedData['password']);

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => $hashedPassword
        ]);

        Etablissement::create([
            'user_id' => $user->id,
            'region_id' => $validatedData['region_id'],
            'nom_efp' => $validatedData['nom_efp'],
            'adresse' => $validatedData['adresse'],
            'tel' => $validatedData['tel'],
            'ville' => $validatedData['ville'],
            'status' => $validatedData['status'],
        ]);

        return response()->json([
            'message' => 'Etablissement created successfully!'
        ], 201);
    }

    public function entrepriseRegister(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'raison' => 'required|max:100',
            'site' => 'required|max:100',
            'logo' => 'required|image|mimes:png,jpg,jpeg,svg|size:5120',
            'telephone1' => 'required|max:45',
            'telephone2' => 'required|max:45',
            'telephone3' => 'required|max:45',
            'representant' => 'required|max:100',
        ]);

        $logo = $request->file('logo')->store('images', 'public');
        $hashedPassword = bcrypt($validatedData['password']);

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => $hashedPassword
        ]);

        Entreprise::create([
            'user_id' => $user->id,
            'raison' => $validatedData['raison'],
            'site' => $validatedData['site'],
            'logo' => $logo,
            'telephone1' => $validatedData['telephone1'],
            'telephone2' => $validatedData['telephone2'],
            'telephone3' => $validatedData['telephone3'],
            'representant' => $validatedData['representant'],
        ]);

        return response()->json([
            'message' => 'Entreprise created successfully!'
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        $user = User::where('email', $validatedData['email'])->first();

        if (!$user || !Hash::check($validatedData['password'], $user->password)) {
            return response()->json([
                'message' => 'email ou mot de passe inxorrect!'
            ], 401);
        }

        $role = $user->role->name;

        $userData = [
          'id' => $user->id,
          'email' => $user->email,
           'role' => $role
        ];

        return response()->json($userData);
    }

    public function logout()
    {
        Auth::logout();
        session()->flush();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
