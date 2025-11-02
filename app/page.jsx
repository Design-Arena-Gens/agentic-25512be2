export default function Page() {
  return (
    <article>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The MAN 36/48 is a medium-speed, four-stroke marine diesel engine. In its
          common-rail (CR) configuration, fuel is pressurized centrally and distributed via a
          high-pressure rail to each cylinder. Electronic control meters the precise injection
          quantity, timing, and rate shaping (pilot/main/after) independent of engine speed.
        </p>
        <ul>
          <li><strong>Goals</strong>: finer atomization, cleaner combustion, reduced NOx/soot, lower SFOC, flexible timing.</li>
          <li><strong>Key idea</strong>: separate pressure generation from injection timing using a shared rail.</li>
        </ul>
      </section>

      <section id="components">
        <h2>Major Components and What They Do</h2>

        <h3>1) Low-Pressure (LP) Fuel Circuit</h3>
        <ul>
          <li><strong>Service/settling tanks</strong>: supply treated HFO/MGO at correct temp/viscosity.</li>
          <li><strong>LP transfer pump</strong>: moves fuel from tank to conditioning and engine.</li>
          <li><strong>Duplex filters & automatic fine filter</strong>: remove particulates before HP stage.</li>
          <li><strong>Viscosity/temperature controller & heaters/coolers</strong>: maintain target injection viscosity.</li>
          <li><strong>LP supply/return manifolds</strong>: feed HP pump inlets and return excess fuel.</li>
        </ul>

        <h3>2) High-Pressure Generation</h3>
        <ul>
          <li><strong>High-pressure (HP) pump</strong> (engine-driven plunger modules): raises fuel to ~800?1,600 bar (typical range; exact setpoints depend on load/variant).</li>
          <li><strong>Non-return/inlet metering valves</strong>: control filling of pump chambers and prevent backflow.</li>
          <li><strong>Pressure limiting valve (PLV)</strong>: mechanical overpressure protection, dumps to return if rail exceeds limit.</li>
        </ul>

        <h3>3) Common Rail and Distribution</h3>
        <ul>
          <li><strong>Common rail accumulator</strong>: stores pressurized fuel, damps pulsations.</li>
          <li><strong>Rail pressure sensor</strong>: continuous feedback of actual rail pressure to the ECU.</li>
          <li><strong>Rail drain/bleed</strong>: controlled venting for maintenance and safe depressurization.</li>
          <li><strong>High-pressure piping</strong>: double-walled, shielded lines to each injector for safety.</li>
        </ul>

        <h3>4) Electronic Unit Injectors / Solenoid Injectors</h3>
        <ul>
          <li><strong>Injector nozzle</strong>: multi-hole orifice set for proper spray pattern.</li>
          <li><strong>Solenoid valve (or piezo)</strong>: actuated by ECU to open/close control volume.</li>
          <li><strong>Needle & control chamber</strong>: hydraulic balance; opening occurs when control pressure is reduced.</li>
          <li><strong>Leak-off/return</strong>: routes leakage back to LP return manifold.</li>
        </ul>

        <h3>5) Electronic Control System</h3>
        <ul>
          <li><strong>Engine Control Unit (ECU)</strong>: computes rail setpoint, timing, and quantity per cylinder/shot.</li>
          <li><strong>Local cylinder control modules</strong>: drive injector solenoids and read local sensors.</li>
          <li><strong>Sensors</strong>: speed pickup, cam/phase, rail pressure, charge air pressure/temp, EGTs, coolant/lube temps, knock/pressure (if equipped).</li>
          <li><strong>Actuators</strong>: HP pump metering, PLV command (if electronic), injector valves, start/stop and safety trips.</li>
          <li><strong>HMI/monitoring</strong>: displays alarms, trends, rail pressure, injection timing, cylinder balance.</li>
        </ul>

        <h3>6) Safety, Protections, and Auxiliaries</h3>
        <ul>
          <li><strong>Double-walled HP lines with leak detection</strong>: contains spray in case of leak.</li>
          <li><strong>Mechanical reliefs</strong>: last-resort overpressure protection.</li>
          <li><strong>Software limits</strong>: max rail pressure, max injection duration, temperature interlocks.</li>
          <li><strong>Emergency stop</strong>: immediate fuel shutoff and rail depressurization routine.</li>
        </ul>
      </section>

      <section id="flow">
        <h2>How It Works ? Step by Step</h2>
        <ol>
          <li>
            <strong>Fuel conditioning</strong>: LP system delivers clean fuel at controlled temperature/viscosity to the HP pump inlet.
          </li>
          <li>
            <strong>Pressurization</strong>: The engine-driven HP pump strokes; inlet metering regulates how much fuel is trapped and compressed. The pump feeds the rail until actual pressure matches the ECU setpoint.
          </li>
          <li>
            <strong>Rail pressure control</strong>: ECU compares rail sensor feedback to target and adjusts pump metering (and relief if applicable). Accumulator volume smooths pulsations.
          </li>
          <li>
            <strong>Injection timing command</strong>: For each cylinder, the ECU schedules pilot, main, and optional after-injection based on speed/load, temperatures, emissions strategy, and knock limits.
          </li>
          <li>
            <strong>Injector actuation</strong>: When energized, the injector?s control valve reduces control-chamber pressure, lifting the needle. Rail pressure forces fuel through the nozzle holes, producing fine sprays.
          </li>
          <li>
            <strong>Combustion shaping</strong>: Pilot reduces ignition delay and noise; main provides bulk energy; after-injection can assist soot burn-out or temperature control.
          </li>
          <li>
            <strong>Closure and end of injection</strong>: De-energizing restores control-chamber pressure; the needle closes rapidly, cutting off flow. Small leakage returns via leak-off.
          </li>
          <li>
            <strong>Continuous feedback</strong>: ECU trims timing/duration per-cycle using speed governor error, rail pressure deviation, EGT balance, and (if present) cylinder pressure/knock indicators.
          </li>
        </ol>

        <div className="note">
          Pressurization is decoupled from timing: the rail stays at target pressure regardless of exact injection phasing, giving stable, repeatable spray behavior across the load range.
        </div>
      </section>

      <section id="controls">
        <h2>Control Strategy & Safety Logic</h2>
        <ul>
          <li><strong>Governor & load control</strong>: primary speed loop sets injected energy per cycle; rail setpoint often increases with load for atomization.</li>
          <li><strong>Temperature/pressure limits</strong>: charge air, coolant, and lube constraints can retard timing or cap rail pressure.</li>
          <li><strong>Cylinder balancing</strong>: trims per-cylinder quantity to equalize EGTs and firing pressure where sensors support it.</li>
          <li><strong>Fallback modes</strong>: degraded sensor modes use conservative maps; severe faults trigger fuel cut to affected cylinders or full shutdown.</li>
          <li><strong>Rail protection</strong>: if rail pressure overshoots or leak detection triggers, ECU dumps rail and inhibits restarts until cleared.</li>
        </ul>
      </section>

      <section id="ops">
        <h2>Operation, Start/Stop, and Checks</h2>
        <ol>
          <li><strong>Pre-start</strong>: verify LP filters differential, correct fuel temp/viscosity, rail at zero pressure, no HP leaks indicated.</li>
          <li><strong>Start sequence</strong>: crank to firing speed; ECU ramps rail to initial setpoint; pilot and main injections commence with conservative timing.</li>
          <li><strong>Warm-up</strong>: as temperatures stabilize, ECU advances timing and may raise rail pressure to improve efficiency.</li>
          <li><strong>Load changes</strong>: ECU shapes injection (timing/quantity/rail) to follow governor while keeping emissions within limits.</li>
          <li><strong>Stop</strong>: cut injection; rail is depressurized by controlled bleed; confirm zero rail pressure before opening any HP fittings.</li>
        </ol>
        <div className="warn">High pressure hazard: the rail remains dangerous until verified at zero pressure.</div>
      </section>

      <section id="faq">
        <h2>Quick Reference / FAQ</h2>
        <ul>
          <li><strong>Why common rail vs. cam-driven injection?</strong> Independent control of timing/quantity/pressure; better emissions and flexibility.</li>
          <li><strong>Typical rail pressure?</strong> ~800?1,600 bar depending on load and configuration.</li>
          <li><strong>What if a cylinder injector fails?</strong> ECU can cut that cylinder, keep others running; alarms raised.</li>
          <li><strong>What protects against overpressure?</strong> Software limits plus mechanical PLV; double-walled lines for leak safety.</li>
          <li><strong>How is rate shaping done?</strong> Multiple commanded shots (pilot/main/after) with precise solenoid timing.</li>
        </ul>
      </section>
    </article>
  );
}
