import { BigInt } from "@graphprotocol/graph-ts"
import {
  VehicleStore,
  AddVehicle,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetServiceWorkder
} from "../generated/VehicleStore/VehicleStore"
import { Vehicle } from "../generated/schema"

export function handleAddVehicle(event: AddVehicle): void {
  let vehicle = new Vehicle(event.params.index.toHex())
  vehicle.owner = event.params.owner
  vehicle.VIN = event.params.VIN
  vehicle.name = event.params.name
  vehicle.make = event.params.make
  vehicle.model = event.params.model
  vehicle.color = event.params.color
  vehicle.save()
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetServiceWorkder(event: SetServiceWorkder): void {}
