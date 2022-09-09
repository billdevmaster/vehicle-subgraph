import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AddVehicle,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetServiceWorkder
} from "../generated/VehicleStore/VehicleStore"

export function createAddVehicleEvent(
  index: BigInt,
  owner: Address,
  VIN: string,
  name: string,
  make: string,
  model: string,
  color: string
): AddVehicle {
  let addVehicleEvent = changetype<AddVehicle>(newMockEvent())

  addVehicleEvent.parameters = new Array()

  addVehicleEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("VIN", ethereum.Value.fromString(VIN))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("make", ethereum.Value.fromString(make))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("model", ethereum.Value.fromString(model))
  )
  addVehicleEvent.parameters.push(
    new ethereum.EventParam("color", ethereum.Value.fromString(color))
  )

  return addVehicleEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSetServiceWorkderEvent(
  account: Address
): SetServiceWorkder {
  let setServiceWorkderEvent = changetype<SetServiceWorkder>(newMockEvent())

  setServiceWorkderEvent.parameters = new Array()

  setServiceWorkderEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return setServiceWorkderEvent
}
